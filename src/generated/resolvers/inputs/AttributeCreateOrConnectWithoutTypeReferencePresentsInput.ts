import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentsInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateOrConnectWithoutTypeReferencePresentsInput", {
  isAbstract: true
})
export class AttributeCreateOrConnectWithoutTypeReferencePresentsInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentsInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferencePresentsInput;
}
