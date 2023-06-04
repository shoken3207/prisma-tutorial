export type Task = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  isImportant: boolean;
  userId: number;
  tabId: number;
  order: number;
  deadLine: Date | null;
  createdAt: Date;
};
