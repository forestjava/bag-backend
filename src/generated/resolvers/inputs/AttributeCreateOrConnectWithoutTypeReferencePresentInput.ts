import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateOrConnectWithoutTypeReferencePresentInput", {
  isAbstract: true
})
export class AttributeCreateOrConnectWithoutTypeReferencePresentInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferencePresentInput;
}
