import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntityOrderByWithRelationInput } from "../../../inputs/EntityOrderByWithRelationInput";
import { EntityWhereInput } from "../../../inputs/EntityWhereInput";
import { EntityWhereUniqueInput } from "../../../inputs/EntityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEntityArgs {
  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true
  })
  where?: EntityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EntityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EntityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: true
  })
  cursor?: EntityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
