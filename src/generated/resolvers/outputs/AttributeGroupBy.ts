import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeAvgAggregate } from "../outputs/AttributeAvgAggregate";
import { AttributeCountAggregate } from "../outputs/AttributeCountAggregate";
import { AttributeMaxAggregate } from "../outputs/AttributeMaxAggregate";
import { AttributeMinAggregate } from "../outputs/AttributeMinAggregate";
import { AttributeSumAggregate } from "../outputs/AttributeSumAggregate";
import { Type } from "../../enums/Type";

@TypeGraphQL.ObjectType("AttributeGroupBy", {
  isAbstract: true
})
export class AttributeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  entityId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: "String" | "Number" | "Boolean" | "Moment" | "Reference" | "ReferenceList";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferenceId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeReferencePresentId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeReferenceRelation!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  required!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeholder!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  list!: boolean | null;

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
