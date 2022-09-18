import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentsInput";
import { AttributeUpdateWithoutTypeReferencePresentsInput } from "../inputs/AttributeUpdateWithoutTypeReferencePresentsInput";

@TypeGraphQL.InputType("AttributeUpsertWithoutTypeReferencePresentsInput", {
  isAbstract: true
})
export class AttributeUpsertWithoutTypeReferencePresentsInput {
  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferencePresentsInput, {
    nullable: false
  })
  update!: AttributeUpdateWithoutTypeReferencePresentsInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentsInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferencePresentsInput;
}
