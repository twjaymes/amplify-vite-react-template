import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName?: string | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectName?: string | null;
  readonly Tasks: AsyncCollection<Task>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerObjective = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Objective, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly objectiveNme?: string | null;
  readonly goals?: (GoalObjective | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyObjective = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Objective, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly objectiveNme?: string | null;
  readonly goals: AsyncCollection<GoalObjective>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Objective = LazyLoading extends LazyLoadingDisabled ? EagerObjective : LazyObjective

export declare const Objective: (new (init: ModelInit<Objective>) => Objective) & {
  copyOf(source: Objective, mutator: (draft: MutableModel<Objective>) => MutableModel<Objective> | void): Objective;
}

type EagerGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalName?: string | null;
  readonly Domains?: (GoalDomain | null)[] | null;
  readonly Objectives?: (GoalObjective | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalName?: string | null;
  readonly Domains: AsyncCollection<GoalDomain>;
  readonly Objectives: AsyncCollection<GoalObjective>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goal = LazyLoading extends LazyLoadingDisabled ? EagerGoal : LazyGoal

export declare const Goal: (new (init: ModelInit<Goal>) => Goal) & {
  copyOf(source: Goal, mutator: (draft: MutableModel<Goal>) => MutableModel<Goal> | void): Goal;
}

type EagerDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly domainName?: string | null;
  readonly domainDescription?: string | null;
  readonly subDomain?: string | null;
  readonly goals?: (GoalDomain | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly domainName?: string | null;
  readonly domainDescription?: string | null;
  readonly subDomain?: string | null;
  readonly goals: AsyncCollection<GoalDomain>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Domain = LazyLoading extends LazyLoadingDisabled ? EagerDomain : LazyDomain

export declare const Domain: (new (init: ModelInit<Domain>) => Domain) & {
  copyOf(source: Domain, mutator: (draft: MutableModel<Domain>) => MutableModel<Domain> | void): Domain;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskName?: string | null;
  readonly taskDescription?: string | null;
  readonly taskType?: string | null;
  readonly taskStatus?: string | null;
  readonly taskNotes?: string | null;
  readonly clientID: string;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskName?: string | null;
  readonly taskDescription?: string | null;
  readonly taskType?: string | null;
  readonly taskStatus?: string | null;
  readonly taskNotes?: string | null;
  readonly clientID: string;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientName?: string | null;
  readonly clientEmail?: string | null;
  readonly clientPassword?: string | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientName?: string | null;
  readonly clientEmail?: string | null;
  readonly clientPassword?: string | null;
  readonly Tasks: AsyncCollection<Task>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly collectionName?: string | null;
  readonly collectionDescription?: string | null;
  readonly colletionType?: string | null;
  readonly collectionStatus?: string | null;
  readonly collectionNotes?: string | null;
  readonly Items?: (Item | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly collectionName?: string | null;
  readonly collectionDescription?: string | null;
  readonly colletionType?: string | null;
  readonly collectionStatus?: string | null;
  readonly collectionNotes?: string | null;
  readonly Items: AsyncCollection<Item>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collection = LazyLoading extends LazyLoadingDisabled ? EagerCollection : LazyCollection

export declare const Collection: (new (init: ModelInit<Collection>) => Collection) & {
  copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName: string;
  readonly itemDescription?: string | null;
  readonly itemType?: string | null;
  readonly itemStatus?: string | null;
  readonly itemNotes?: string | null;
  readonly itemPrice?: number | null;
  readonly collectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName: string;
  readonly itemDescription?: string | null;
  readonly itemType?: string | null;
  readonly itemStatus?: string | null;
  readonly itemNotes?: string | null;
  readonly itemPrice?: number | null;
  readonly collectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerGoalObjective = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalObjective, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly objectiveId?: string | null;
  readonly goalId?: string | null;
  readonly objective: Objective;
  readonly goal: Goal;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoalObjective = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalObjective, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly objectiveId?: string | null;
  readonly goalId?: string | null;
  readonly objective: AsyncItem<Objective>;
  readonly goal: AsyncItem<Goal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GoalObjective = LazyLoading extends LazyLoadingDisabled ? EagerGoalObjective : LazyGoalObjective

export declare const GoalObjective: (new (init: ModelInit<GoalObjective>) => GoalObjective) & {
  copyOf(source: GoalObjective, mutator: (draft: MutableModel<GoalObjective>) => MutableModel<GoalObjective> | void): GoalObjective;
}

type EagerGoalDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalDomain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalId?: string | null;
  readonly domainId?: string | null;
  readonly goal: Goal;
  readonly domain: Domain;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoalDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalDomain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalId?: string | null;
  readonly domainId?: string | null;
  readonly goal: AsyncItem<Goal>;
  readonly domain: AsyncItem<Domain>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GoalDomain = LazyLoading extends LazyLoadingDisabled ? EagerGoalDomain : LazyGoalDomain

export declare const GoalDomain: (new (init: ModelInit<GoalDomain>) => GoalDomain) & {
  copyOf(source: GoalDomain, mutator: (draft: MutableModel<GoalDomain>) => MutableModel<GoalDomain> | void): GoalDomain;
}