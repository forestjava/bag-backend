import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeWhereInput } from "../../../inputs/AttributeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  where?: AttributeWhereInput | undefined;
}
