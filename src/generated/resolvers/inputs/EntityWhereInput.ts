import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeListRelationFilter } from "../inputs/AttributeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EntityWhereInput", {
  isAbstract: true
})
export class EntityWhereInput {
  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true
  })
  AND?: EntityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true
  })
  OR?: EntityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true
  })
  NOT?: EntityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  itemName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  listName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AttributeListRelationFilter, {
    nullable: true
  })
  attributes?: AttributeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttributeListRelationFilter, {
    nullable: true
  })
  references?: AttributeListRelationFilter | undefined;
}
