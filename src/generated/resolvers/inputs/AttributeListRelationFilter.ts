import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeWhereInput } from "../inputs/AttributeWhereInput";

@TypeGraphQL.InputType("AttributeListRelationFilter", {
  isAbstract: true
})
export class AttributeListRelationFilter {
  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  every?: AttributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  some?: AttributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  none?: AttributeWhereInput | undefined;
}
