import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferencePresentInputEnvelope } from "../inputs/AttributeCreateManyTypeReferencePresentInputEnvelope";
import { AttributeCreateOrConnectWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferencePresentInput";
import { AttributeCreateWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentInput";
import { AttributeScalarWhereInput } from "../inputs/AttributeScalarWhereInput";
import { AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput } from "../inputs/AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput";
import { AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput } from "../inputs/AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput";
import { AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput } from "../inputs/AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateManyWithoutTypeReferencePresentNestedInput", {
  isAbstract: true
})
export class AttributeUpdateManyWithoutTypeReferencePresentNestedInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutTypeReferencePresentInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutTypeReferencePresentInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput], {
    nullable: true
  })
  upsert?: AttributeUpsertWithWhereUniqueWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyTypeReferencePresentInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyTypeReferencePresentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput], {
    nullable: true
  })
  update?: AttributeUpdateWithWhereUniqueWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput], {
    nullable: true
  })
  updateMany?: AttributeUpdateManyWithWhereWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttributeScalarWhereInput[] | undefined;
}
