import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateWithoutReferencesInput } from "../inputs/EntityCreateWithoutReferencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType("EntityCreateOrConnectWithoutReferencesInput", {
  isAbstract: true
})
export class EntityCreateOrConnectWithoutReferencesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutReferencesInput, {
    nullable: false
  })
  create!: EntityCreateWithoutReferencesInput;
}
