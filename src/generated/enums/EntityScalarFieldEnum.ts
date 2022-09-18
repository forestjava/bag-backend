import * as TypeGraphQL from "type-graphql";

export enum EntityScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  itemName = "itemName",
  listName = "listName"
}
TypeGraphQL.registerEnumType(EntityScalarFieldEnum, {
  name: "EntityScalarFieldEnum",
  description: undefined,
});
