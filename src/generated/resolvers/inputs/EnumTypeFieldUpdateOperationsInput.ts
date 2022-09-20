import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type } from "../../enums/Type";

@TypeGraphQL.InputType("EnumTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Type, {
    nullable: true
  })
  set?: "String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList" | undefined;
}
