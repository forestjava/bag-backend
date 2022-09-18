import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityCreateManyInput } from "../../../inputs/EntityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEntityArgs {
  @TypeGraphQL.Field(_type => [EntityCreateManyInput], {
    nullable: false
  })
  data!: EntityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
