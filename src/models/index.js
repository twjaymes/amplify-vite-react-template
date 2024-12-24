// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Objective, Goal, Domain, Task, Client, Collection, Item, GoalObjective, GoalDomain } = initSchema(schema);

export {
  Project,
  Objective,
  Goal,
  Domain,
  Task,
  Client,
  Collection,
  Item,
  GoalObjective,
  GoalDomain
};