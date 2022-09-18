import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEntityArgs } from "./args/AggregateEntityArgs";
import { Entity } from "../../../models/Entity";
import { AggregateEntity } from "../../outputs/AggregateEntity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Entity)
export class AggregateEntityResolver {
  @TypeGraphQL.Query(_returns => AggregateEntity, {
    nullable: false
  })
  async aggregateEntity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEntityArgs): Promise<AggregateEntity> {
    return getPrismaFromContext(ctx).entity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
