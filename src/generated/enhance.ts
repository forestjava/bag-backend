import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Entity: crudResolvers.EntityCrudResolver,
  Attribute: crudResolvers.AttributeCrudResolver
};
const actionResolversMap = {
  Entity: {
    aggregateEntity: actionResolvers.AggregateEntityResolver,
    createManyEntity: actionResolvers.CreateManyEntityResolver,
    createOneEntity: actionResolvers.CreateOneEntityResolver,
    deleteManyEntity: actionResolvers.DeleteManyEntityResolver,
    deleteOneEntity: actionResolvers.DeleteOneEntityResolver,
    findFirstEntity: actionResolvers.FindFirstEntityResolver,
    entities: actionResolvers.FindManyEntityResolver,
    entity: actionResolvers.FindUniqueEntityResolver,
    groupByEntity: actionResolvers.GroupByEntityResolver,
    updateManyEntity: actionResolvers.UpdateManyEntityResolver,
    updateOneEntity: actionResolvers.UpdateOneEntityResolver,
    upsertOneEntity: actionResolvers.UpsertOneEntityResolver
  },
  Attribute: {
    aggregateAttribute: actionResolvers.AggregateAttributeResolver,
    createManyAttribute: actionResolvers.CreateManyAttributeResolver,
    createOneAttribute: actionResolvers.CreateOneAttributeResolver,
    deleteManyAttribute: actionResolvers.DeleteManyAttributeResolver,
    deleteOneAttribute: actionResolvers.DeleteOneAttributeResolver,
    findFirstAttribute: actionResolvers.FindFirstAttributeResolver,
    attributes: actionResolvers.FindManyAttributeResolver,
    attribute: actionResolvers.FindUniqueAttributeResolver,
    groupByAttribute: actionResolvers.GroupByAttributeResolver,
    updateManyAttribute: actionResolvers.UpdateManyAttributeResolver,
    updateOneAttribute: actionResolvers.UpdateOneAttributeResolver,
    upsertOneAttribute: actionResolvers.UpsertOneAttributeResolver
  }
};
const crudResolversInfo = {
  Entity: ["aggregateEntity", "createManyEntity", "createOneEntity", "deleteManyEntity", "deleteOneEntity", "findFirstEntity", "entities", "entity", "groupByEntity", "updateManyEntity", "updateOneEntity", "upsertOneEntity"],
  Attribute: ["aggregateAttribute", "createManyAttribute", "createOneAttribute", "deleteManyAttribute", "deleteOneAttribute", "findFirstAttribute", "attributes", "attribute", "groupByAttribute", "updateManyAttribute", "updateOneAttribute", "upsertOneAttribute"]
};
const argsInfo = {
  AggregateEntityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEntityArgs: ["data", "skipDuplicates"],
  CreateOneEntityArgs: ["data"],
  DeleteManyEntityArgs: ["where"],
  DeleteOneEntityArgs: ["where"],
  FindFirstEntityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEntityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEntityArgs: ["where"],
  GroupByEntityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEntityArgs: ["data", "where"],
  UpdateOneEntityArgs: ["data", "where"],
  UpsertOneEntityArgs: ["where", "create", "update"],
  AggregateAttributeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAttributeArgs: ["data", "skipDuplicates"],
  CreateOneAttributeArgs: ["data"],
  DeleteManyAttributeArgs: ["where"],
  DeleteOneAttributeArgs: ["where"],
  FindFirstAttributeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttributeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAttributeArgs: ["where"],
  GroupByAttributeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAttributeArgs: ["data", "where"],
  UpdateOneAttributeArgs: ["data", "where"],
  UpsertOneAttributeArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Entity: relationResolvers.EntityRelationsResolver,
  Attribute: relationResolvers.AttributeRelationsResolver
};
const relationResolversInfo = {
  Entity: ["attributes", "references"],
  Attribute: ["entity", "typeReference"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Entity: ["id", "name", "description", "itemName", "listName"],
  Attribute: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateEntity: ["_count", "_avg", "_sum", "_min", "_max"],
  EntityGroupBy: ["id", "name", "description", "itemName", "listName", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAttribute: ["_count", "_avg", "_sum", "_min", "_max"],
  AttributeGroupBy: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  EntityCount: ["attributes", "references"],
  EntityCountAggregate: ["id", "name", "description", "itemName", "listName", "_all"],
  EntityAvgAggregate: ["id"],
  EntitySumAggregate: ["id"],
  EntityMinAggregate: ["id", "name", "description", "itemName", "listName"],
  EntityMaxAggregate: ["id", "name", "description", "itemName", "listName"],
  AttributeCountAggregate: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list", "_all"],
  AttributeAvgAggregate: ["id", "entityId", "typeReferenceId"],
  AttributeSumAggregate: ["id", "entityId", "typeReferenceId"],
  AttributeMinAggregate: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeMaxAggregate: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  EntityWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "itemName", "listName", "attributes", "references"],
  EntityOrderByWithRelationInput: ["id", "name", "description", "itemName", "listName", "attributes", "references"],
  EntityWhereUniqueInput: ["id"],
  EntityOrderByWithAggregationInput: ["id", "name", "description", "itemName", "listName", "_count", "_avg", "_max", "_min", "_sum"],
  EntityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "itemName", "listName"],
  AttributeWhereInput: ["AND", "OR", "NOT", "id", "entity", "entityId", "name", "title", "type", "typeReference", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeOrderByWithRelationInput: ["id", "entity", "entityId", "name", "title", "type", "typeReference", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeWhereUniqueInput: ["id"],
  AttributeOrderByWithAggregationInput: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list", "_count", "_avg", "_max", "_min", "_sum"],
  AttributeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  EntityCreateInput: ["name", "description", "itemName", "listName", "attributes", "references"],
  EntityUpdateInput: ["name", "description", "itemName", "listName", "attributes", "references"],
  EntityCreateManyInput: ["id", "name", "description", "itemName", "listName"],
  EntityUpdateManyMutationInput: ["name", "description", "itemName", "listName"],
  AttributeCreateInput: ["entity", "name", "title", "type", "typeReference", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeUpdateInput: ["entity", "name", "title", "type", "typeReference", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeCreateManyInput: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeUpdateManyMutationInput: ["name", "title", "type", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  AttributeListRelationFilter: ["every", "some", "none"],
  AttributeOrderByRelationAggregateInput: ["_count"],
  EntityCountOrderByAggregateInput: ["id", "name", "description", "itemName", "listName"],
  EntityAvgOrderByAggregateInput: ["id"],
  EntityMaxOrderByAggregateInput: ["id", "name", "description", "itemName", "listName"],
  EntityMinOrderByAggregateInput: ["id", "name", "description", "itemName", "listName"],
  EntitySumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EntityRelationFilter: ["is", "isNot"],
  EnumTypeFilter: ["equals", "in", "notIn", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolNullableFilter: ["equals", "not"],
  AttributeCountOrderByAggregateInput: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeAvgOrderByAggregateInput: ["id", "entityId", "typeReferenceId"],
  AttributeMaxOrderByAggregateInput: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeMinOrderByAggregateInput: ["id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeSumOrderByAggregateInput: ["id", "entityId", "typeReferenceId"],
  EnumTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  AttributeCreateNestedManyWithoutEntityInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttributeCreateNestedManyWithoutTypeReferenceInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  AttributeUpdateManyWithoutEntityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AttributeUpdateManyWithoutTypeReferenceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EntityCreateNestedOneWithoutAttributesInput: ["create", "connectOrCreate", "connect"],
  EntityCreateNestedOneWithoutReferencesInput: ["create", "connectOrCreate", "connect"],
  EntityUpdateOneRequiredWithoutAttributesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumTypeFieldUpdateOperationsInput: ["set"],
  EntityUpdateOneWithoutReferencesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTypeFilter: ["equals", "in", "notIn", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedEnumTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  AttributeCreateWithoutEntityInput: ["name", "title", "type", "typeReference", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeCreateOrConnectWithoutEntityInput: ["where", "create"],
  AttributeCreateManyEntityInputEnvelope: ["data", "skipDuplicates"],
  AttributeCreateWithoutTypeReferenceInput: ["entity", "name", "title", "type", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeCreateOrConnectWithoutTypeReferenceInput: ["where", "create"],
  AttributeCreateManyTypeReferenceInputEnvelope: ["data", "skipDuplicates"],
  AttributeUpsertWithWhereUniqueWithoutEntityInput: ["where", "update", "create"],
  AttributeUpdateWithWhereUniqueWithoutEntityInput: ["where", "data"],
  AttributeUpdateManyWithWhereWithoutEntityInput: ["where", "data"],
  AttributeScalarWhereInput: ["AND", "OR", "NOT", "id", "entityId", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput: ["where", "update", "create"],
  AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput: ["where", "data"],
  AttributeUpdateManyWithWhereWithoutTypeReferenceInput: ["where", "data"],
  EntityCreateWithoutAttributesInput: ["name", "description", "itemName", "listName", "references"],
  EntityCreateOrConnectWithoutAttributesInput: ["where", "create"],
  EntityCreateWithoutReferencesInput: ["name", "description", "itemName", "listName", "attributes"],
  EntityCreateOrConnectWithoutReferencesInput: ["where", "create"],
  EntityUpsertWithoutAttributesInput: ["update", "create"],
  EntityUpdateWithoutAttributesInput: ["name", "description", "itemName", "listName", "references"],
  EntityUpsertWithoutReferencesInput: ["update", "create"],
  EntityUpdateWithoutReferencesInput: ["name", "description", "itemName", "listName", "attributes"],
  AttributeCreateManyEntityInput: ["id", "name", "title", "type", "typeReferenceId", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeCreateManyTypeReferenceInput: ["id", "entityId", "name", "title", "type", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeUpdateWithoutEntityInput: ["name", "title", "type", "typeReference", "typeReferenceRelation", "present", "required", "placeholder", "list"],
  AttributeUpdateWithoutTypeReferenceInput: ["entity", "name", "title", "type", "typeReferenceRelation", "present", "required", "placeholder", "list"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

