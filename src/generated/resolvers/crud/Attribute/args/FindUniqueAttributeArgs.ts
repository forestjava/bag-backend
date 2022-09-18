import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeWhereUniqueInput } from "../../../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: false
  })
  where!: AttributeWhereUniqueInput;
}
