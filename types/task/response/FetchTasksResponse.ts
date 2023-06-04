import { Task } from '../Task';

export type FetchTasksResponse = {
  message: string;
  tasks: Task[];
};
