import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttributeOrderByWithRelationInput } from "../../../inputs/AttributeOrderByWithRelationInput";
import { AttributeWhereInput } from "../../../inputs/AttributeWhereInput";
import { AttributeWhereUniqueInput } from "../../../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAttributeArgs {
  @TypeGraphQL.Field(_type => AttributeWhereInput, {
    nullable: true
  })
  where?: AttributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttributeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AttributeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: true
  })
  cursor?: AttributeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
