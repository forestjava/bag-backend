import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type } from "../../enums/Type";

@TypeGraphQL.ObjectType("AttributeMinAggregate", {
  isAbstract: true
})
export class AttributeMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  entityId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => Type, {
    nullable: true
  })
  type!: "String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferenceId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferencePresentId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeReferenceRelation!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  required!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeholder!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  list!: boolean | null;
}
