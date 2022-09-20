import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeAvgOrderByAggregateInput } from "../inputs/AttributeAvgOrderByAggregateInput";
import { AttributeCountOrderByAggregateInput } from "../inputs/AttributeCountOrderByAggregateInput";
import { AttributeMaxOrderByAggregateInput } from "../inputs/AttributeMaxOrderByAggregateInput";
import { AttributeMinOrderByAggregateInput } from "../inputs/AttributeMinOrderByAggregateInput";
import { AttributeSumOrderByAggregateInput } from "../inputs/AttributeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AttributeOrderByWithAggregationInput", {
  isAbstract: true
})
export class AttributeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeReferenceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeReferenceRelation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  present?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  required?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  placeholder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  list?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AttributeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AttributeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttributeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AttributeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttributeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AttributeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttributeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AttributeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttributeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AttributeSumOrderByAggregateInput | undefined;
}
