import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityCreateInput } from "../../../inputs/EntityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEntityArgs {
  @TypeGraphQL.Field(_type => EntityCreateInput, {
    nullable: false
  })
  data!: EntityCreateInput;
}
