import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeOrderByRelationAggregateInput } from "../inputs/AttributeOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EntityOrderByWithRelationInput", {
  isAbstract: true
})
export class EntityOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => AttributeOrderByRelationAggregateInput, {
    nullable: true
  })
  attributes?: AttributeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttributeOrderByRelationAggregateInput, {
    nullable: true
  })
  references?: AttributeOrderByRelationAggregateInput | undefined;
}
