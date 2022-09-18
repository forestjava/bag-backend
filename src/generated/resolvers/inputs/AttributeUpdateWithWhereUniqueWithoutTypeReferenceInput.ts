import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeUpdateWithoutTypeReferenceInput } from "../inputs/AttributeUpdateWithoutTypeReferenceInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput", {
  isAbstract: true
})
export class AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferenceInput, {
    nullable: false
  })
  data!: AttributeUpdateWithoutTypeReferenceInput;
}
