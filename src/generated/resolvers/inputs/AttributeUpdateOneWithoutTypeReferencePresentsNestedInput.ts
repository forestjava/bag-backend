import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateOrConnectWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateOrConnectWithoutTypeReferencePresentsInput";
import { AttributeCreateWithoutTypeReferencePresentsInput } from "../inputs/AttributeCreateWithoutTypeReferencePresentsInput";
import { AttributeUpdateWithoutTypeReferencePresentsInput } from "../inputs/AttributeUpdateWithoutTypeReferencePresentsInput";
import { AttributeUpsertWithoutTypeReferencePresentsInput } from "../inputs/AttributeUpsertWithoutTypeReferencePresentsInput";
import { AttributeWhereUniqueInput } from "../inputs/AttributeWhereUniqueInput";

@TypeGraphQL.InputType("AttributeUpdateOneWithoutTypeReferencePresentsNestedInput", {
  isAbstract: true
})
export class AttributeUpdateOneWithoutTypeReferencePresentsNestedInput {
  @TypeGraphQL.Field(_type => AttributeCreateWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  create?: AttributeCreateWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => AttributeCreateOrConnectWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  connectOrCreate?: AttributeCreateOrConnectWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => AttributeUpsertWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  upsert?: AttributeUpsertWithoutTypeReferencePresentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AttributeWhereUniqueInput, {
    nullable: true
  })
  connect?: AttributeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AttributeUpdateWithoutTypeReferencePresentsInput, {
    nullable: true
  })
  update?: AttributeUpdateWithoutTypeReferencePresentsInput | undefined;
}
