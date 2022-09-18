import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeListRelationFilter } from "../inputs/AttributeListRelationFilter";
import { AttributeRelationFilter } from "../inputs/AttributeRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { EntityRelationFilter } from "../inputs/EntityRelationFilter";
import { EnumTypeFilter } from "../inputs/EnumTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AttributeWhereInput", {
  isAbstract: true
})
export class AttributeWhereInput {
  @TypeGraphQL.Field(_type => [AttributeWhereInput], {
    nullable: true
  })
  AND?: AttributeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereInput], {
    nullable: true
  })
  OR?: AttributeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereInput], {
    nullable: true
  })
  NOT?: AttributeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AttributeListRelationFilter, {
    nullable: true
  })
  typeReferencePresents?: AttributeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EntityRelationFilter, {
    nullable: true
  })
  entity?: EntityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  entityId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTypeFilter, {
    nullable: true
  })
  type?: EnumTypeFilter | undefined;

  @TypeGraphQL.Field(_type => EntityRelationFilter, {
    nullable: true
  })
  typeReference?: EntityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  typeReferenceId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AttributeRelationFilter, {
    nullable: true
  })
  typeReferencePresent?: AttributeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  typeReferencePresentId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  typeReferenceRelation?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  required?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  placeholder?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  list?: BoolNullableFilter | undefined;
}
