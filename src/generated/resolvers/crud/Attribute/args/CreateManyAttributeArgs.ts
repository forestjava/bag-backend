import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeCreateManyInput } from "../../../inputs/AttributeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAttributeArgs {
  @TypeGraphQL.Field(_type => [AttributeCreateManyInput], {
    nullable: false
  })
  data!: AttributeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
