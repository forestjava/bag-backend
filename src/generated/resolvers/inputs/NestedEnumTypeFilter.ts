import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type } from "../../enums/Type";

@TypeGraphQL.InputType("NestedEnumTypeFilter", {
  isAbstract: true
})
export class NestedEnumTypeFilter {
  @TypeGraphQL.Field(_type => Type, {
    nullable: true
  })
  equals?: "String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList" | undefined;

  @TypeGraphQL.Field(_type => [Type], {
    nullable: true
  })
  in?: Array<"String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList"> | undefined;

  @TypeGraphQL.Field(_type => [Type], {
    nullable: true
  })
  notIn?: Array<"String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTypeFilter, {
    nullable: true
  })
  not?: NestedEnumTypeFilter | undefined;
}
