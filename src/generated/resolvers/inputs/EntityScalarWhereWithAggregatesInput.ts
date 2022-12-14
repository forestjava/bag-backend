import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EntityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EntityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EntityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EntityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EntityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EntityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  itemName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  listName?: StringWithAggregatesFilter | undefined;
}
