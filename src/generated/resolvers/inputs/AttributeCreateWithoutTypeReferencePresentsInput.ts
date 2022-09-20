import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateNestedOneWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateNestedOneWithoutTypeReferencePresentsInput";
import { EntityCreateNestedOneWithoutAttributesInput } from "../inputs/EntityCreateNestedOneWithoutAttributesInput";
import { EntityCreateNestedOneWithoutReferencesInput } from "../inputs/EntityCreateNestedOneWithoutReferencesInput";
import { Type } from "../../enums/Type";

@TypeGraphQL.InputType("AttributeCreateWithoutTypeReferencePresentsInput", {
  isAbstract: true
})
export class AttributeCreateWithoutTypeReferencePresentsInput {
  @TypeGraphQL.Field(_type => EntityCreateNestedOneWithoutAttributesInput, {
    nullable: false
  })
  entity!: EntityCreateNestedOneWithoutAttributesInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: "String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList";

  @TypeGraphQL.Field(_type => EntityCreateNestedOneWithoutReferencesInput, {
    nullable: true
  })
  typeReference?: EntityCreateNestedOneWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateNestedOneWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  typeReferencePresent?: AttributeCreateNestedOneWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeReferenceRelation?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  required?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeholder?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  list?: boolean | undefined;
}
