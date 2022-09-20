import _ from 'lodash';
import { Attribute, Entity } from '../generated';

type AttributeMetadata = {
  query: string;
};

type EntityMetadata = {
  fileGraphQL: string;

  itemName: string;
  itemNameC: string;
  listName: string;
  listNameC: string;

  itemAttributes: AttributeMetadata[];
  listAttributes: AttributeMetadata[];
};

type Metadata = EntityMetadata[];

const id: AttributeMetadata = { query: 'id' };

const createAttributeMetadata = (attribute: Attribute): AttributeMetadata => {
  let query: string;
  if (attribute.type === 'Reference' || attribute.type === 'ReferenceList') {
    query = `${attribute.name} { id ${attribute.typeReferencePresent.name} }`;
  } else {
    query = attribute.name;
  }
  return { query };
};

const createItemAttributes = (entity: Entity): AttributeMetadata[] => [
  id,
  ...entity.attributes.map((attribute) => createAttributeMetadata(attribute)),
];

const createListAttributes = (entity: Entity): AttributeMetadata[] => [
  id,
  ...entity.attributes.filter((attribute) => attribute.list).map((attribute) => createAttributeMetadata(attribute)),
];

const createEntityMetadata = (entity: Entity): EntityMetadata => ({
  fileGraphQL: `graphql/${entity.listName}.graphql`,

  itemName: entity.itemName,
  itemNameC: _.upperFirst(entity.itemName),
  listName: entity.listName,
  listNameC: _.upperFirst(entity.listName),

  itemAttributes: createItemAttributes(entity),
  listAttributes: createListAttributes(entity),
});

export const createMetadata = (entities: Entity[]): Metadata => {
  return entities.map((entity) => createEntityMetadata(entity));
};
