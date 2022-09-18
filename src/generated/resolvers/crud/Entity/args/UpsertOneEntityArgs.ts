import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityCreateInput } from "../../../inputs/EntityCreateInput";
import { EntityUpdateInput } from "../../../inputs/EntityUpdateInput";
import { EntityWhereUniqueInput } from "../../../inputs/EntityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEntityArgs {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityCreateInput, {
    nullable: false
  })
  create!: EntityCreateInput;

  @TypeGraphQL.Field(_type => EntityUpdateInput, {
    nullable: false
  })
  update!: EntityUpdateInput;
}
