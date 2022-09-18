import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyEntityInputEnvelope } from "../inputs/AttributeCreateManyEntityInputEnvelope";
import { AttributeCreateOrConnectWithoutEntityInput } from "../inputs/AttributeCreateOrConnectWithoutEntityInput";
import { AttributeCreateWithoutEntityInput } from "../inputs/AttributeCreateWithoutEntityInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateNestedManyWithoutEntityInput", {
  isAbstract: true
})
export class AttributeCreateNestedManyWithoutEntityInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutEntityInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutEntityInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutEntityInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyEntityInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyEntityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput[] | undefined;
}
