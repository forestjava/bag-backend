import 'reflect-metadata';
import { promises as fs } from 'fs';
import ejs from 'ejs';

import { PrismaClient } from '@prisma/client';
import { createMetadata } from './metadata';
import { Attribute, Entity } from '../generated';

const prisma = new PrismaClient();

const input = './src/generator/schema.prisma.ejs';
const output = process.argv[2] || './src/generator/output/schema.prisma';

async function main() {
  const entities = await prisma.entity.findMany({
    include: {
      attributes: {
        include: {
          typeReference: true,
        },
      },
    },
  });

  const metadata = createMetadata(entities);

  const content = await ejs.renderFile(input, metadata);
  await fs.writeFile(output, content);
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
