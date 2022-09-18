import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeCreateInput } from "../../../inputs/AttributeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeCreateInput, {
    nullable: false
  })
  data!: AttributeCreateInput;
}
