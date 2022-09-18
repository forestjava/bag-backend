import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateOrConnectWithoutReferencesInput } from "../inputs/EntityCreateOrConnectWithoutReferencesInput";
import { EntityCreateWithoutReferencesInput } from "../inputs/EntityCreateWithoutReferencesInput";
import { EntityUpdateWithoutReferencesInput } from "../inputs/EntityUpdateWithoutReferencesInput";
import { EntityUpsertWithoutReferencesInput } from "../inputs/EntityUpsertWithoutReferencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType("EntityUpdateOneWithoutReferencesNestedInput", {
  isAbstract: true
})
export class EntityUpdateOneWithoutReferencesNestedInput {
  @TypeGraphQL.Field(_type => EntityCreateWithoutReferencesInput, {
    nullable: true
  })
  create?: EntityCreateWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => EntityCreateOrConnectWithoutReferencesInput, {
    nullable: true
  })
  connectOrCreate?: EntityCreateOrConnectWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => EntityUpsertWithoutReferencesInput, {
    nullable: true
  })
  upsert?: EntityUpsertWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: true
  })
  connect?: EntityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutReferencesInput, {
    nullable: true
  })
  update?: EntityUpdateWithoutReferencesInput | undefined;
}
