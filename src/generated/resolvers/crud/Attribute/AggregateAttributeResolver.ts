import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttributeArgs } from "./args/AggregateAttributeArgs";
import { Attribute } from "../../../models/Attribute";
import { AggregateAttribute } from "../../outputs/AggregateAttribute";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attribute)
export class AggregateAttributeResolver {
  @TypeGraphQL.Query(_returns => AggregateAttribute, {
    nullable: false
  })
  async aggregateAttribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttributeArgs): Promise<AggregateAttribute> {
    return getPrismaFromContext(ctx).attribute.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
