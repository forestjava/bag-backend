import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntityAvgAggregate } from "../outputs/EntityAvgAggregate";
import { EntityCountAggregate } from "../outputs/EntityCountAggregate";
import { EntityMaxAggregate } from "../outputs/EntityMaxAggregate";
import { EntityMinAggregate } from "../outputs/EntityMinAggregate";
import { EntitySumAggregate } from "../outputs/EntitySumAggregate";

@TypeGraphQL.ObjectType("AggregateEntity", {
  isAbstract: true
})
export class AggregateEntity {
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
