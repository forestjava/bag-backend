import _ from 'lodash';
import { Attribute, Entity } from '../generated';

type AttributeMetadata = {
  name: string;
  query: string;
  isReference?: boolean;
  isReferenceList?: boolean;
  isPrimitive?: boolean;
};

type EntityMetadata = {
  fileGraphQL: string;
  fileForm: string;

  itemName: string;
  itemNameC: string;
  listName: string;
  listNameC: string;

  itemAttributes: AttributeMetadata[];
  listAttributes: AttributeMetadata[];
};

type Metadata = EntityMetadata[];

const getPresent = (typeReference: Entity): string => {
  const attributes = typeReference.attributes.filter((attribute) => attribute.present);
  if (attributes.length === 0) return 'id';
  else return attributes[0].name;
};

const createAttributeMetadata = (attribute: Attribute): AttributeMetadata => {
  const name = attribute.name;
  let query: string;
  let isReference: boolean = false;
  let isReferenceList: boolean = false;
  let isPrimitive: boolean = false;

  if (attribute.type === 'Reference') {
    query = `${attribute.name} { id ${getPresent(attribute.typeReference)} }`;
    isReference = true;
  } else if (attribute.type === 'ReferenceList') {
    query = `${attribute.name} { id ${getPresent(attribute.typeReference)} }`;
    isReferenceList = true;
  } else {
    query = attribute.name;
    isPrimitive = true;
  }
  return { name, query, isReference, isReferenceList, isPrimitive };
};

const createItemAttributes = (entity: Entity): AttributeMetadata[] =>
  entity.attributes.map((attribute) => createAttributeMetadata(attribute));

const createListAttributes = (entity: Entity): AttributeMetadata[] =>
  entity.attributes.filter((attribute) => attribute.list).map((attribute) => createAttributeMetadata(attribute));

const createEntityMetadata = (entity: Entity): EntityMetadata => ({
  fileGraphQL: `graphql/${entity.listName}.graphql`,
  fileForm: `forms/${entity.itemName}.ts`,

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
