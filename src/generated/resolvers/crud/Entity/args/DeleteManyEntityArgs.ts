import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityWhereInput } from "../../../inputs/EntityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEntityArgs {
  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  where?: EntityWhereInput | undefined;
}
