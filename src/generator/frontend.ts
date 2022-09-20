import 'reflect-metadata';
import { promises as fs } from 'fs';
import ejs from 'ejs';

import { PrismaClient } from '@prisma/client';
import { createMetadata } from './frontend-metadata';

const prisma = new PrismaClient();

const input = './src/generator/input/entity.graphql.ejs';
const output = process.argv[2] || './src/generator/output/';

async function main() {
  const entities = await prisma.entity.findMany({
    include: {
      attributes: {
        include: {
          typeReference: true,
          typeReferencePresent: true,
        },
      },
    },
  });

  const metadata = createMetadata(entities);
  const results = [];

  metadata.forEach(async (entity) => {
    const content = await ejs.renderFile(input, entity);
    const result = fs.writeFile(`${output}${entity.fileGraphQL}`, content);
    results.push(result);
  });

  await Promise.all(results);
}

main()
  .then(async () => {
    console.log('succeeded');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
