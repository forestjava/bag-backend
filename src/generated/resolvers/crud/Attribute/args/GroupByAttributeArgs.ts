import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeOrderByWithAggregationInput } from "../../../inputs/AttributeOrderByWithAggregationInput";
import { AttributeScalarWhereWithAggregatesInput } from "../../../inputs/AttributeScalarWhereWithAggregatesInput";
import { AttributeWhereInput } from "../../../inputs/AttributeWhereInput";
import { AttributeScalarFieldEnum } from "../../../../enums/AttributeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  where?: AttributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttributeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AttributeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "entityId" | "name" | "title" | "type" | "typeReferenceId" | "typeReferencePresentId" | "typeReferenceRelation" | "required" | "placeholder" | "list">;

  @TypeGraphQL.Field(_type => AttributeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttributeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
