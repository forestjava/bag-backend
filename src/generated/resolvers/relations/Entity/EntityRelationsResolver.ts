import * as TypeGraphQL from "type-graphql";
import { Attribute } from "../../../models/Attribute";
import { Entity } from "../../../models/Entity";
import { EntityAttributesArgs } from "./args/EntityAttributesArgs";
import { EntityReferencesArgs } from "./args/EntityReferencesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Entity)
export class EntityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Attribute], {
    nullable: false
  })
  async attributes(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityAttributesArgs): Promise<Attribute[]> {
    return getPrismaFromContext(ctx).entity.findUnique({
      where: {
        id: entity.id,
      },
    }).attributes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Attribute], {
    nullable: false
  })
  async references(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityReferencesArgs): Promise<Attribute[]> {
    return getPrismaFromContext(ctx).entity.findUnique({
      where: {
        id: entity.id,
      },
    }).references(args);
  }
}
