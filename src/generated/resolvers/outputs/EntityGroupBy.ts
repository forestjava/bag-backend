import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityAvgAggregate } from "../outputs/EntityAvgAggregate";
import { EntityCountAggregate } from "../outputs/EntityCountAggregate";
import { EntityMaxAggregate } from "../outputs/EntityMaxAggregate";
import { EntityMinAggregate } from "../outputs/EntityMinAggregate";
import { EntitySumAggregate } from "../outputs/EntitySumAggregate";

@TypeGraphQL.ObjectType("EntityGroupBy", {
  isAbstract: true
})
export class EntityGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  itemName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  listName!: string;

  @TypeGraphQL.Field(_type => EntityCountAggregate, {
    nullable: true
  })
  _count!: EntityCountAggregate | null;

  @TypeGraphQL.Field(_type => EntityAvgAggregate, {
    nullable: true
  })
  _avg!: EntityAvgAggregate | null;

  @TypeGraphQL.Field(_type => EntitySumAggregate, {
    nullable: true
  })
  _sum!: EntitySumAggregate | null;

  @TypeGraphQL.Field(_type => EntityMinAggregate, {
    nullable: true
  })
  _min!: EntityMinAggregate | null;

  @TypeGraphQL.Field(_type => EntityMaxAggregate, {
    nullable: true
  })
  _max!: EntityMaxAggregate | null;
}
