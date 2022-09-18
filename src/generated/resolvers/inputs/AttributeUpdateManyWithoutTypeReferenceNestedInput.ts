import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferenceInputEnvelope } from "../inputs/AttributeCreateManyTypeReferenceInputEnvelope";
import { AttributeCreateOrConnectWithoutTypeReferenceInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferenceInput";
import { AttributeCreateWithoutTypeReferenceInput } from "../inputs/AttributeCreateWithoutTypeReferenceInput";
import { AttributeScalarWhereInput } from "../inputs/AttributeScalarWhereInput";
import { AttributeUpdateManyWithWhereWithoutTypeReferenceInput } from "../inputs/AttributeUpdateManyWithWhereWithoutTypeReferenceInput";
import { AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput } from "../inputs/AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput";
import { AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput } from "../inputs/AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateManyWithoutTypeReferenceNestedInput", {
  isAbstract: true
})
export class AttributeUpdateManyWithoutTypeReferenceNestedInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutTypeReferenceInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutTypeReferenceInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput], {
    nullable: true
  })
  upsert?: AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyTypeReferenceInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyTypeReferenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  set?: AttributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  delete?: AttributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput], {
    nullable: true
  })
  update?: AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpdateManyWithWhereWithoutTypeReferenceInput], {
    nullable: true
  })
  updateMany?: AttributeUpdateManyWithWhereWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttributeScalarWhereInput[] | undefined;
}
