import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeUpdateManyWithoutEntityNestedInput } from "../inputs/AttributeUpdateManyWithoutEntityNestedInput";
import { AttributeUpdateManyWithoutTypeReferenceNestedInput } from "../inputs/AttributeUpdateManyWithoutTypeReferenceNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EntityUpdateInput", {
  isAbstract: true
})
export class EntityUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  itemName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  listName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttributeUpdateManyWithoutEntityNestedInput, {
    nullable: true
  })
  attributes?: AttributeUpdateManyWithoutEntityNestedInput | undefined;

  @TypeGraphQL.Field(_type => AttributeUpdateManyWithoutTypeReferenceNestedInput, {
    nullable: true
  })
  references?: AttributeUpdateManyWithoutTypeReferenceNestedInput | undefined;
}
