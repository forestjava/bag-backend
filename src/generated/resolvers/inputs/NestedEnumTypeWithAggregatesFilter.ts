import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTypeFilter } from "../inputs/NestedEnumTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Type } from "../../enums/Type";

@TypeGraphQL.InputType("NestedEnumTypeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Type, {
    nullable: true
  })
  equals?: "String" | "Number" | "Boolean" | "Datetime" | "Reference" | "ReferenceList" | undefined;

  @TypeGraphQL.Field(_type => [Type], {
    nullable: true
  })
  in?: Array<"String" | "Number" | "Boolean" | "Datetime" | "Reference" | "ReferenceList"> | undefined;

  @TypeGraphQL.Field(_type => [Type], {
    nullable: true
  })
  notIn?: Array<"String" | "Number" | "Boolean" | "Datetime" | "Reference" | "ReferenceList"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumTypeFilter | undefined;
}
