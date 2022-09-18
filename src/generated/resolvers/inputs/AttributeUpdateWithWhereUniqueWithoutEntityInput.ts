import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeUpdateWithoutEntityInput } from "../inputs/AttributeUpdateWithoutEntityInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateWithWhereUniqueWithoutEntityInput", {
  isAbstract: true
})
export class AttributeUpdateWithWhereUniqueWithoutEntityInput {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutEntityInput, {
    nullable: false
  })
  data!: AttributeUpdateWithoutEntityInput;
}
