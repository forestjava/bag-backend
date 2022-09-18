import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type } from "../../enums/Type";

@TypeGraphQL.InputType("AttributeCreateManyInput", {
  isAbstract: true
})
export class AttributeCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferenceId?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferencePresentId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeReferenceRelation?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  required?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeholder?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  list?: boolean | undefined;
}
