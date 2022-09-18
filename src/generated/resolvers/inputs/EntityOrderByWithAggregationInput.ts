import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityAvgOrderByAggregateInput } from "../inputs/EntityAvgOrderByAggregateInput";
import { EntityCountOrderByAggregateInput } from "../inputs/EntityCountOrderByAggregateInput";
import { EntityMaxOrderByAggregateInput } from "../inputs/EntityMaxOrderByAggregateInput";
import { EntityMinOrderByAggregateInput } from "../inputs/EntityMinOrderByAggregateInput";
import { EntitySumOrderByAggregateInput } from "../inputs/EntitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EntityOrderByWithAggregationInput", {
  isAbstract: true
})
export class EntityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  itemName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  listName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EntityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EntityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EntityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EntityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EntityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EntitySumOrderByAggregateInput | undefined;
}
