import 'reflect-metadata';
import { promises as fs } from 'fs';
import ejs from 'ejs';

import { PrismaClient } from '@prisma/client';
import { createMetadata } from './frontend-metadata';

const prisma = new PrismaClient();

const inputGraphQL = './src/generator/input/entityQueries.graphql.ejs';
const inputForm = './src/generator/input/entityForm.ts.ejs';
const inputBagInputEntity = './src/generator/input/InputEntity.tsx.ejs';
const inputBagInputEntities = './src/generator/input/InputEntities.tsx.ejs';
const inputBagEntityDetails = './src/generator/input/EntityDetails.tsx.ejs';
const inputBagEntitiesList = './src/generator/input/EntitiesList.tsx.ejs';
const inputRoutes = './src/generator/input/routes.tsx.ejs';

const output = process.argv[2] || './src/generator/output/';

async function main() {
  const entities = await prisma.entity.findMany({
    orderBy: { id: 'asc' },
    include: {
      attributes: {
        orderBy: { id: 'asc' },
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

  metadata.entities.forEach(async (entity) => {
    const graphql = await ejs.renderFile(inputGraphQL, entity);
    results.push(fs.writeFile(`${output}${entity.fileGraphQL}`, graphql));

    const form = await ejs.renderFile(inputForm, entity);
    results.push(fs.writeFile(`${output}${entity.fileForm}`, form));

    const bagInputEntity = await ejs.renderFile(inputBagInputEntity, entity);
    results.push(fs.writeFile(`${output}${entity.fileBagInputEntity}`, bagInputEntity));

    const bagInputEntities = await ejs.renderFile(inputBagInputEntities, entity);
    results.push(fs.writeFile(`${output}${entity.fileBagInputEntities}`, bagInputEntities));

    const bagEntityDetails = await ejs.renderFile(inputBagEntityDetails, entity);
    results.push(fs.writeFile(`${output}${entity.fileBagEntityDetails}`, bagEntityDetails));

    const bagEntitiesList = await ejs.renderFile(inputBagEntitiesList, entity);
    results.push(fs.writeFile(`${output}${entity.fileBagEntitiesList}`, bagEntitiesList));
  });

  const routes = await ejs.renderFile(inputRoutes, metadata);
  results.push(fs.writeFile(`${output}routes.tsx`, routes));

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
