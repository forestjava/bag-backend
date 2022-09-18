import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Entity } from "../models/Entity";
import { Type } from "../enums/Type";
import { AttributeCount } from "../resolvers/outputs/AttributeCount";

@TypeGraphQL.ObjectType("Attribute", {
  isAbstract: true
})
export class Attribute {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  typeReferencePresents?: Attribute[];

  entity?: Entity;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  entityId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: "String" | "Number" | "Boolean" | "Datetime" | "Reference" | "ReferenceList";

  typeReference?: Entity | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferenceId?: number | null;

  typeReferencePresent?: Attribute | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferencePresentId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeReferenceRelation?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  required?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeholder?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  list?: boolean | null;

  @TypeGraphQL.Field(_type => AttributeCount, {
    nullable: true
  })
  _count?: AttributeCount | null;
}
