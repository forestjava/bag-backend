import 'reflect-metadata';
import { promises as fs } from 'fs';
import ejs from 'ejs';

import { PrismaClient } from '@prisma/client';
import { createMetadata } from './frontend-metadata';

const prisma = new PrismaClient();

const inputGraphQL = './src/generator/input/entityQueries.graphql.ejs';
const inputForm = './src/generator/input/entityForm.ts.ejs';
const output = process.argv[2] || './src/generator/output/';

async function main() {
  const entities = await prisma.entity.findMany({
    include: {
      attributes: {
        include: {
          typeReference: {
            include: {
              attributes: true,
            },
          },
        },
      },
    },
  });

  const metadata = createMetadata(entities);
  const results = [];

  metadata.forEach(async (entity) => {
    const graphql = await ejs.renderFile(inputGraphQL, entity);
    results.push(fs.writeFile(`${output}${entity.fileGraphQL}`, graphql));

    const form = await ejs.renderFile(inputForm, entity);
    results.push(fs.writeFile(`${output}${entity.fileForm}`, form));
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
