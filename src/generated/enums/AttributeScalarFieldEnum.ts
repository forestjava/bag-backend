import * as TypeGraphQL from "type-graphql";

export enum AttributeScalarFieldEnum {
  id = "id",
  entityId = "entityId",
  name = "name",
  title = "title",
  type = "type",
  typeReferenceId = "typeReferenceId",
  typeReferenceRelation = "typeReferenceRelation",
  present = "present",
  required = "required",
  placeholder = "placeholder",
  list = "list"
}
TypeGraphQL.registerEnumType(AttributeScalarFieldEnum, {
  name: "AttributeScalarFieldEnum",
  description: undefined,
});
