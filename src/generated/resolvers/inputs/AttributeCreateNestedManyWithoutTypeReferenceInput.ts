import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferenceInputEnvelope } from "../inputs/AttributeCreateManyTypeReferenceInputEnvelope";
import { AttributeCreateOrConnectWithoutTypeReferenceInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferenceInput";
import { AttributeCreateWithoutTypeReferenceInput } from "../inputs/AttributeCreateWithoutTypeReferenceInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateNestedManyWithoutTypeReferenceInput", {
  isAbstract: true
})
export class AttributeCreateNestedManyWithoutTypeReferenceInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutTypeReferenceInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutTypeReferenceInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyTypeReferenceInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyTypeReferenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput[] | undefined;
}
