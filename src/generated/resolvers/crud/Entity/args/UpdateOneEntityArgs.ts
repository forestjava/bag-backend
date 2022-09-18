import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityUpdateInput } from "../../../inputs/EntityUpdateInput";
import { EntityWhereUniqueInput } from "../../../inputs/EntityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEntityArgs {
  @TypeGraphQL.Field(_type => EntityUpdateInput, {
    nullable: false
  })
  data!: EntityUpdateInput;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false
  })
  where!: EntityWhereUniqueInput;
}
