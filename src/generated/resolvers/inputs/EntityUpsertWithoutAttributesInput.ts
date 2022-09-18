import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityCreateWithoutAttributesInput } from "../inputs/EntityCreateWithoutAttributesInput";
import { EntityUpdateWithoutAttributesInput } from "../inputs/EntityUpdateWithoutAttributesInput";

@TypeGraphQL.InputType("EntityUpsertWithoutAttributesInput", {
  isAbstract: true
})
export class EntityUpsertWithoutAttributesInput {
  @TypeGraphQL.Field(_type => EntityUpdateWithoutAttributesInput, {
    nullable: false
  })
  update!: EntityUpdateWithoutAttributesInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutAttributesInput, {
    nullable: false
  })
  create!: EntityCreateWithoutAttributesInput;
}
