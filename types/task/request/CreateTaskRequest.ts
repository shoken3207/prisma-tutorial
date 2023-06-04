export type CreateTaskRequest = {
  title: string;
  content: string;
  userId: number;
  tabId: number;
  isImportant: boolean;
  deadLine: Date | null;
};
