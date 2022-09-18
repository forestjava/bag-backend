import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityOrderByWithAggregationInput } from "../../../inputs/EntityOrderByWithAggregationInput";
import { EntityScalarWhereWithAggregatesInput } from "../../../inputs/EntityScalarWhereWithAggregatesInput";
import { EntityWhereInput } from "../../../inputs/EntityWhereInput";
import { EntityScalarFieldEnum } from "../../../../enums/EntityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEntityArgs {
  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  where?: EntityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EntityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EntityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "itemName" | "listName">;

  @TypeGraphQL.Field(_type => EntityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EntityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
