import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityUpdateManyMutationInput } from "../../../inputs/EntityUpdateManyMutationInput";
import { EntityWhereInput } from "../../../inputs/EntityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEntityArgs {
  @TypeGraphQL.Field(_type => EntityUpdateManyMutationInput, {
    nullable: false
  })
  data!: EntityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  where?: EntityWhereInput | undefined;
}
