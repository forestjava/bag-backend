import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateOrConnectWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferencePresentsInput";
import { AttributeCreateWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentsInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateNestedOneWithoutTypeReferencePresentsInput", {
  isAbstract: true
})
export class AttributeCreateNestedOneWithoutTypeReferencePresentsInput {
  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateOrConnectWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput | undefined;
}
