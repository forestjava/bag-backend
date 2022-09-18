import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeCreateInput } from "../../../inputs/AttributeCreateInput";
import { AttributeUpdateInput } from "../../../inputs/AttributeUpdateInput";
import { AttributeWhereUniqueInput } from "../../../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttributeCreateInput, {
    nullable: false
  })
  create!: AttributeCreateInput;

  @TypeGraphQL.Field(_type => AttributeUpdateInput, {
    nullable: false
  })
  update!: AttributeUpdateInput;
}
