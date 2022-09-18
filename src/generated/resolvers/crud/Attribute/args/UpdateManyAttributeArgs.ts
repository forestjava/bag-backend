import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeUpdateManyMutationInput } from "../../../inputs/AttributeUpdateManyMutationInput";
import { AttributeWhereInput } from "../../../inputs/AttributeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttributeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  where?: AttributeWhereInput | undefined;
}
