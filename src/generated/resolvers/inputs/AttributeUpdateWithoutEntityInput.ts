import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeUpdateManyWithoutTypeReferencePresentNestedInput } from "../inputs/AttributeUpdateManyWithoutTypeReferencePresentNestedInput";
import { AttributeUpdateOneWithoutTypeReferencePresentsNestedInput } from "../inputs/AttributeUpdateOneWithoutTypeReferencePresentsNestedInput";
import { EntityUpdateOneWithoutReferencesNestedInput } from "../inputs/EntityUpdateOneWithoutReferencesNestedInput";
import { EnumTypeFieldUpdateOperationsInput } from "../inputs/EnumTypeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AttributeUpdateWithoutEntityInput", {
  isAbstract: true
})
export class AttributeUpdateWithoutEntityInput {
  @TypeGraphQL.Field(_type => AttributeUpdateManyWithoutTypeReferencePresentNestedInput, {
    nullable: true
  })
  typeReferencePresents?: AttributeUpdateManyWithoutTypeReferencePresentNestedInput | undefined;

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

  @TypeGraphQL.Field(_type => AttributeUpdateOneWithoutTypeReferencePresentsNestedInput, {
    nullable: true
  })
  typeReferencePresent?: AttributeUpdateOneWithoutTypeReferencePresentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeReferenceRelation?: NullableStringFieldUpdateOperationsInput | undefined;

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
