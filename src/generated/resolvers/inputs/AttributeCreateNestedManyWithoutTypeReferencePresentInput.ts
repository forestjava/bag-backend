import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferencePresentInputEnvelope } from "../inputs/AttributeCreateManyTypeReferencePresentInputEnvelope";
import { AttributeCreateOrConnectWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferencePresentInput";
import { AttributeCreateWithoutTypeReferencePresentInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeCreateNestedManyWithoutTypeReferencePresentInput", {
  isAbstract: true
})
export class AttributeCreateNestedManyWithoutTypeReferencePresentInput {
  @TypeGraphQL.Field(_type => [AttributeCreateWithoutTypeReferencePresentInput], {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttributeCreateOrConnectWithoutTypeReferencePresentInput], {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferencePresentInput[] | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateManyTypeReferencePresentInputEnvelope, {
    nullable: true
  })
  createMany?: AttributeCreateManyTypeReferencePresentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttributeWhereUniqueInput], {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput[] | undefined;
}
