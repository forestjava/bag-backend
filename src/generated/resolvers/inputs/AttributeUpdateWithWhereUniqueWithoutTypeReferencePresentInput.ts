import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeUpdateWithoutTypeReferencePresentInput } from "../inputs/AttributeUpdateWithoutTypeReferencePresentInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput", {
  isAbstract: true
})
export class AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferencePresentInput, {
    nullable: false
  })
  data!: AttributeUpdateWithoutTypeReferencePresentInput;
}
