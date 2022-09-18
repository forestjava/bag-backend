import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateOrConnectWithoutAttributesInput } from "../inputs/EntityCreateOrConnectWithoutAttributesInput";
import { EntityCreateWithoutAttributesInput } from "../inputs/EntityCreateWithoutAttributesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType("EntityCreateNestedOneWithoutAttributesInput", {
  isAbstract: true
})
export class EntityCreateNestedOneWithoutAttributesInput {
  @TypeGraphQL.Field(_type => EntityCreateWithoutAttributesInput, {
    nullable: true
  })
  create?: EntityCreateWithoutAttributesInput | undefined;

  @TypeGraphQL.Field(_type => EntityCreateOrConnectWithoutAttributesInput, {
    nullable: true
  })
  connectOrCreate?: EntityCreateOrConnectWithoutAttributesInput | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: true
  })
  connect?: EntityWhereUniqueInput | undefined;
}
