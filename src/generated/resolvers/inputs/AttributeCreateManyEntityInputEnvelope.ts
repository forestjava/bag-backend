import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyEntityInput } from "../inputs/AttributeCreateManyEntityInput";

@TypeGraphQL.InputType("AttributeCreateManyEntityInputEnvelope", {
  isAbstract: true
})
export class AttributeCreateManyEntityInputEnvelope {
  @TypeGraphQL.Field(_type => [AttributeCreateManyEntityInput], {
    nullable: false
  })
  data!: AttributeCreateManyEntityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
