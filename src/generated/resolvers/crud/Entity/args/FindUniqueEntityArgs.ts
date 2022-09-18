import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityWhereUniqueInput } from "../../../inputs/EntityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEntityArgs {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false
  })
  where!: EntityWhereUniqueInput;
}
