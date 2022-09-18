import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityWhereInput } from "../inputs/EntityWhereInput";

@TypeGraphQL.InputType("EntityRelationFilter", {
  isAbstract: true
})
export class EntityRelationFilter {
  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  is?: EntityWhereInput | undefined;

  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  isNot?: EntityWhereInput | undefined;
}
