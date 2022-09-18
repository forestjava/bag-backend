import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferenceInput } from "../inputs/AttributeCreateWithoutTypeReferenceInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateOrConnectWithoutTypeReferenceInput", {
  isAbstract: true
})
export class AttributeCreateOrConnectWithoutTypeReferenceInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferenceInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferenceInput;
}
