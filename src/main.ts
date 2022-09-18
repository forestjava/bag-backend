import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { resolvers } from './generated';

import { PrismaClient } from '@prisma/client';

import { ApolloServer } from 'apollo-server';

export class HttpQueryError extends Error {
  public extensions: { code: number };

  constructor(statusCode: number, message: string) {
    super(message);
    this.extensions = { code: statusCode };
  }
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    introspection: true,
    context: ({ req, res }) => {
      const auth = req.headers['x-bag-secret'];
      if (auth !== process.env.BAG_SECRET) throw new HttpQueryError(403, 'Forbidden');
      return { prisma };
    },
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}
bootstrap();
