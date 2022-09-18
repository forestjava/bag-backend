import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateOrConnectWithoutReferencesInput } from "../inputs/EntityCreateOrConnectWithoutReferencesInput";
import { EntityCreateWithoutReferencesInput } from "../inputs/EntityCreateWithoutReferencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType("EntityCreateNestedOneWithoutReferencesInput", {
  isAbstract: true
})
export class EntityCreateNestedOneWithoutReferencesInput {
  @TypeGraphQL.Field(_type => EntityCreateWithoutReferencesInput, {
    nullable: true
  })
  create?: EntityCreateWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => EntityCreateOrConnectWithoutReferencesInput, {
    nullable: true
  })
  connectOrCreate?: EntityCreateOrConnectWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: true
  })
  connect?: EntityWhereUniqueInput | undefined;
}
