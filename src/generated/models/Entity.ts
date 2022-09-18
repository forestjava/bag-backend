import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attribute } from "../models/Attribute";
import { EntityCount } from "../resolvers/outputs/EntityCount";

@TypeGraphQL.ObjectType("Entity", {
  isAbstract: true
})
export class Entity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  itemName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  listName!: string;

  attributes?: Attribute[];

  references?: Attribute[];

  @TypeGraphQL.Field(_type => EntityCount, {
    nullable: true
  })
  _count?: EntityCount | null;
}
