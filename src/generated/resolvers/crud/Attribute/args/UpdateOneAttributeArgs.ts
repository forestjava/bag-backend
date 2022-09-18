import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeUpdateInput } from "../../../inputs/AttributeUpdateInput";
import { AttributeWhereUniqueInput } from "../../../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeUpdateInput, {
    nullable: false
  })
  data!: AttributeUpdateInput;

  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;
}
