import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeWhereInput } from "../inputs/AttributeWhereInput";

@TypeGraphQL.InputType("AttributeRelationFilter", {
  isAbstract: true
})
export class AttributeRelationFilter {
  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  is?: AttributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  isNot?: AttributeWhereInput | undefined;
}
