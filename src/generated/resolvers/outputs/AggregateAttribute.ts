import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeAvgAggregate } from "../outputs/AttributeAvgAggregate";
import { AttributeCountAggregate } from "../outputs/AttributeCountAggregate";
import { AttributeMaxAggregate } from "../outputs/AttributeMaxAggregate";
import { AttributeMinAggregate } from "../outputs/AttributeMinAggregate";
import { AttributeSumAggregate } from "../outputs/AttributeSumAggregate";

@TypeGraphQL.ObjectType("AggregateAttribute", {
  isAbstract: true
})
export class AggregateAttribute {
  @TypeGraphQL.Field(_type => AttributeCountAggregate, {
    nullable: true
  })
  _count!: AttributeCountAggregate | null;

  @TypeGraphQL.Field(_type => AttributeAvgAggregate, {
    nullable: true
  })
  _avg!: AttributeAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttributeSumAggregate, {
    nullable: true
  })
  _sum!: AttributeSumAggregate | null;

  @TypeGraphQL.Field(_type => AttributeMinAggregate, {
    nullable: true
  })
  _min!: AttributeMinAggregate | null;

  @TypeGraphQL.Field(_type => AttributeMaxAggregate, {
    nullable: true
  })
  _max!: AttributeMaxAggregate | null;
}
