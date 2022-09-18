import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateWithoutEntityInput } from "../inputs/AttributeCreateWithoutEntityInput";
import { AttributeUpdateWithoutEntityInput } from "../inputs/AttributeUpdateWithoutEntityInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpsertWithWhereUniqueWithoutEntityInput", {
  isAbstract: true
})
export class AttributeUpsertWithWhereUniqueWithoutEntityInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutEntityInput, {
    nullable: false
  })
  update!: AttributeUpdateWithoutEntityInput;

  @TypeGraphQL.Field(_type => AttributeCreateWithoutEntityInput, {
    nullable: false
  })
  create!: AttributeCreateWithoutEntityInput;
}
