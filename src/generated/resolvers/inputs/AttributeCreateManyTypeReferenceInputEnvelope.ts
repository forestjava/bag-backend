import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferenceInput } from "../inputs/AttributeCreateManyTypeReferenceInput";

@TypeGraphQL.InputType("AttributeCreateManyTypeReferenceInputEnvelope", {
  isAbstract: true
})
export class AttributeCreateManyTypeReferenceInputEnvelope {
  @TypeGraphQL.Field(_type => [AttributeCreateManyTypeReferenceInput], {
    nullable: false
  })
  data!: AttributeCreateManyTypeReferenceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
