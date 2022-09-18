import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { resolvers } from './generated';

import { PrismaClient } from '@prisma/client';

import { ApolloServer } from 'apollo-server';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}
bootstrap();
