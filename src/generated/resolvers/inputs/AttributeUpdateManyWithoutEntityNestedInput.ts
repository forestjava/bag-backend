import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyEntityInputEnvelope } from "../inputs/AttributeCreateManyEntityInputEnvelope";
import { AttributeCreateOrConnectWithoutEntityInput } from "../inputs/AttributeCreateOrConnectWithoutEntityInput";
import { AttributeCreateWithoutEntityInput } from "../inputs/AttributeCreateWithoutEntityInput";
import { AttributeScalarWhereInput } from "../inputs/AttributeScalarWhereInput";
import { AttributeUpdateManyWithWhereWithoutEntityInput } from "../inputs/AttributeUpdateManyWithWhereWithoutEntityInput";
import { AttributeUpdateWithWhereUniqueWithoutEntityInput } from "../inputs/AttributeUpdateWithWhereUniqueWithoutEntityInput";
import { AttributeUpsertWithWhereUniqueWithoutEntityInput } from "../inputs/AttributeUpsertWithWhereUniqueWithoutEntityInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateManyWithoutEntityNestedInput", {
  isAbstract: true
})
export class AttributeUpdateManyWithoutEntityNestedInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutEntityInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutEntityInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpsertWithWhereUniqueWithoutEntityInput], {
    nullable: true
  })
  upsert?: AttributeUpsertWithWhereUniqueWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyEntityInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyEntityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttributeUpdateWithWhereUniqueWithoutEntityInput], {
    nullable: true
  })
  update?: AttributeUpdateWithWhereUniqueWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpdateManyWithWhereWithoutEntityInput], {
    nullable: true
  })
  updateMany?: AttributeUpdateManyWithWhereWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttributeScalarWhereInput[] | undefined;
}
