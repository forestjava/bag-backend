import _ from 'lodash';
import { Attribute, Entity } from '../generated';

type AttributeMetadata = {
  name: string;
  query: string;
  isReference?: boolean;
  isReferenceList?: boolean;
  isPrimitive?: boolean;

  component: string;
  label: string;
  required: boolean;
  placeholder: string;

  output: string;
};

type EntityMetadata = {
  fileGraphQL: string;
  fileForm: string;
  fileBagInputEntity: string;
  fileBagInputEntities: string;
  fileBagEntityDetails: string;
  fileBagEntitiesList: string;

  itemName: string;
  itemNameC: string;
  listName: string;
  listNameC: string;

  presentProperty: string;

  itemAttributes: AttributeMetadata[];
  listAttributes: AttributeMetadata[];

  detailsImports: Set<string>;
  id: number;
};

type Metadata = {
  entities: EntityMetadata[];
};

const getPresentProperty = (typeReference: Entity): string => {
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

  let component: string;
  let output: string;

  if (attribute.type === 'Reference') {
    const present = getPresentProperty(attribute.typeReference);
    query = `${attribute.name} { id ${present} }`;
    isReference = true;
    component = `Input${_.upperFirst(attribute.typeReference.itemName)}`;
    output = `${attribute.name}?.${present}`;
  } else if (attribute.type === 'ReferenceList') {
    const present = getPresentProperty(attribute.typeReference);
    query = `${attribute.name} { id ${present} }`;
    isReferenceList = true;
    component = `Input${_.upperFirst(attribute.typeReference.listName)}`;
  } else {
    query = attribute.name;
    isPrimitive = true;
    component = `Input${attribute.type}`;
    output = attribute.name;
  }
  return {
    name,
    query,
    isReference,
    isReferenceList,
    isPrimitive,
    component,
    label: attribute.title,
    required: attribute.required ?? false,
    placeholder: attribute.placeholder,
    output,
  };
};

const createItemAttributes = (entity: Entity): AttributeMetadata[] =>
  entity.attributes.map((attribute) => createAttributeMetadata(attribute));

const createListAttributes = (entity: Entity): AttributeMetadata[] =>
  entity.attributes.filter((attribute) => attribute.list).map((attribute) => createAttributeMetadata(attribute));

const collectImports = (attributes: AttributeMetadata[]): Set<string> => {
  return new Set<string>(attributes.map((attribute) => attribute.component));
};

const createEntityMetadata = (entity: Entity): EntityMetadata => {
  const itemName = entity.itemName;
  const itemNameC = _.upperFirst(entity.itemName);
  const listName = entity.listName;
  const listNameC = _.upperFirst(entity.listName);

  const itemAttributes = createItemAttributes(entity);
  const listAttributes = createListAttributes(entity);

  return {
    fileGraphQL: `graphql/${listName}.graphql`,
    fileForm: `forms/${itemName}.ts`,
    fileBagInputEntity: `bags/Input${itemNameC}.tsx`,
    fileBagInputEntities: `bags/Input${listNameC}.tsx`,
    fileBagEntityDetails: `bags/${itemNameC}Details.tsx`,
    fileBagEntitiesList: `bags/${listNameC}List.tsx`,

    itemName,
    itemNameC,
    listName,
    listNameC,

    presentProperty: getPresentProperty(entity),

    itemAttributes,
    listAttributes,

    detailsImports: collectImports(itemAttributes),
    id: entity.id,
  };
};

export const createMetadata = (entities: Entity[]): Metadata => ({
  entities: entities.map((entity) => createEntityMetadata(entity)),
});
