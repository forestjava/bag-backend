import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityUpdateOneRequiredWithoutAttributesNestedInput } from "../inputs/EntityUpdateOneRequiredWithoutAttributesNestedInput";
import { EntityUpdateOneWithoutReferencesNestedInput } from "../inputs/EntityUpdateOneWithoutReferencesNestedInput";
import { EnumTypeFieldUpdateOperationsInput } from "../inputs/EnumTypeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AttributeUpdateInput", {
  isAbstract: true
})
export class AttributeUpdateInput {
  @TypeGraphQL.Field(_type => EntityUpdateOneRequiredWithoutAttributesNestedInput, {
    nullable: true
  })
  entity?: EntityUpdateOneRequiredWithoutAttributesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateOneWithoutReferencesNestedInput, {
    nullable: true
  })
  typeReference?: EntityUpdateOneWithoutReferencesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeReferenceRelation?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  present?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  required?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  placeholder?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  list?: NullableBoolFieldUpdateOperationsInput | undefined;
}
