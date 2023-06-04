export type UpdateTaskRequest = {
  taskId: number;
  userId: number;
  title: string;
  content: string;
  isImportant: boolean;
  deadLine: Date | null;
};
