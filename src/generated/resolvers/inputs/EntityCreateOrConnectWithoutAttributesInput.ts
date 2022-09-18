import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateWithoutAttributesInput } from "../inputs/EntityCreateWithoutAttributesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType("EntityCreateOrConnectWithoutAttributesInput", {
  isAbstract: true
})
export class EntityCreateOrConnectWithoutAttributesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutAttributesInput, {
    nullable: false
  })
  create!: EntityCreateWithoutAttributesInput;
}
