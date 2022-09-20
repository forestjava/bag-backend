import * as TypeGraphQL from "type-graphql";
import { Attribute } from "../../../models/Attribute";
import { Entity } from "../../../models/Entity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attribute)
export class AttributeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Entity, {
    nullable: false
  })
  async entity(@TypeGraphQL.Root() attribute: Attribute, @TypeGraphQL.Ctx() ctx: any): Promise<Entity> {
    return getPrismaFromContext(ctx).attribute.findUnique({
      where: {
        id: attribute.id,
      },
    }).entity({});
  }

  @TypeGraphQL.FieldResolver(_type => Entity, {
    nullable: true
  })
  async typeReference(@TypeGraphQL.Root() attribute: Attribute, @TypeGraphQL.Ctx() ctx: any): Promise<Entity | null> {
    return getPrismaFromContext(ctx).attribute.findUnique({
      where: {
        id: attribute.id,
      },
    }).typeReference({});
  }
}
