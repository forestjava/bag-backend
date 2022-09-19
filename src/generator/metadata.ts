import { Attribute, Entity, Type } from '../generated';

type ModelProperty = {
  name: string;
  type: string;
  monkeys: string;
};

type Model = {
  name: string;
  properties: ModelProperty[];
};

type Metadata = {
  models: Model[];
};

const TypesMap: Record<Type, string> = {
  String: 'String',
  Number: 'Float',
  Boolean: 'Boolean',
  Datetime: 'DateTime',
  Reference: '#ref?',
  ReferenceList: '#ref?',
};

const createCarrier = (attribute: Attribute): ModelProperty => {
  const name = `${attribute.name}Id`;
  const type = 'Int?';
  const monkeys = '';
  return { name, type, monkeys };
};

const createProperties = (attribute: Attribute): ModelProperty[] => {
  const name = attribute.name;

  const properties = [];
  if (attribute.type === Type.Reference) {
    const carrier = createCarrier(attribute);
    properties.push(carrier);
    const type = `${attribute.typeReference.name}?`;
    const monkeys = `@relation("${attribute.typeReferenceRelation}", fields: [${carrier.name}], references: [id])`;
    properties.push({ name, type, monkeys });
  } else if (attribute.type === Type.ReferenceList) {
    const type = `${attribute.typeReference.name}[]`;
    const monkeys = `@relation("${attribute.typeReferenceRelation}")`;
    properties.push({ name, type, monkeys });
  } else {
    const type = `${TypesMap[attribute.type]}?`;
    const monkeys = ``;
    properties.push({ name, type, monkeys });
  }
  return properties;
};

const createModel = (entity: Entity): Model => {
  const name = entity.name;
  const properties = [{ name: 'id', type: 'Int', monkeys: '@id @default(autoincrement())' }];
  entity.attributes.forEach((attribute) => {
    const fields = createProperties(attribute);
    properties.push(...fields);
  });
  return { name, properties };
};

export const createMetadata = (entities: Entity[]): Metadata => {
  return { models: entities.map((entity) => createModel(entity)) };
};
