import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferenceInput } from "../inputs/AttributeCreateWithoutTypeReferenceInput";
import { AttributeUpdateWithoutTypeReferenceInput } from "../inputs/AttributeUpdateWithoutTypeReferenceInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput", {
  isAbstract: true
})
export class AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferenceInput, {
    nullable: false
  })
  update!: AttributeUpdateWithoutTypeReferenceInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferenceInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferenceInput;
}
