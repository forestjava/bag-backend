import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeScalarWhereInput } from "../inputs/AttributeScalarWhereInput";
import { AttributeUpdateManyMutationInput } from "../inputs/AttributeUpdateManyMutationInput";

@TypeGraphQL.InputType("AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput", {
  isAbstract: true
})
export class AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput {
  @TypeGraphQL.Field(_type => AttributeScalarWhereInput, {
    nullable: false
  })
  where!: AttributeScalarWhereInput;

  @TypeGraphQL.Field(_type => AttributeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttributeUpdateManyMutationInput;
}
