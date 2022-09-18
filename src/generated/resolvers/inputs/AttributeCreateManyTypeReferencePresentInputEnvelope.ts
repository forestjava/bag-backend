import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttributeCreateManyTypeReferencePresentInput } from "../inputs/AttributeCreateManyTypeReferencePresentInput";

@TypeGraphQL.InputType("AttributeCreateManyTypeReferencePresentInputEnvelope", {
  isAbstract: true
})
export class AttributeCreateManyTypeReferencePresentInputEnvelope {
  @TypeGraphQL.Field(_type => [AttributeCreateManyTypeReferencePresentInput], {
    nullable: false
  })
  data!: AttributeCreateManyTypeReferencePresentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
