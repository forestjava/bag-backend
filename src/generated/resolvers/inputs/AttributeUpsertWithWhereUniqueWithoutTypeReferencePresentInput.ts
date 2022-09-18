import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentInput";
import { AttributeUpdateWithoutTypeReferencePresentInput } from "../inputs/AttributeUpdateWithoutTypeReferencePresentInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput", {
  isAbstract: true
})
export class AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferencePresentInput, {
    nullable: false
  })
  update!: AttributeUpdateWithoutTypeReferencePresentInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutTypeReferencePresentInput;
}
