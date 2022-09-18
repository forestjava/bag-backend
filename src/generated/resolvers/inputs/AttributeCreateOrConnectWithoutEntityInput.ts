import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutEntityInput } from "../inputs/AttributeCreateWithoutEntityInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateOrConnectWithoutEntityInput", {
  isAbstract: true
})
export class AttributeCreateOrConnectWithoutEntityInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutEntityInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutEntityInput;
}
