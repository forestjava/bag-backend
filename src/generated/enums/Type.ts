import * as TypeGraphQL from "type-graphql";

export enum Type {
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Moment = "Moment",
  Reference = "Reference",
  ReferenceList = "ReferenceList"
}
TypeGraphQL.registerEnumType(Type, {
  name: "Type",
  description: undefined,
});
