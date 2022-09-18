import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateNestedManyWithoutEntityInput } from "../inputs/AttributeCreateNestedManyWithoutEntityInput";

@TypeGraphQL.InputType("EntityCreateWithoutReferencesInput", {
  isAbstract: true
})
export class EntityCreateWithoutReferencesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  itemName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  listName!: string;

  @TypeGraphQL.Field(_type => AttributeCreateNestedManyWithoutEntityInput, {
    nullable: true
  })
  attributes?: AttributeCreateNestedManyWithoutEntityInput | undefined;
}
