export type InputTask = {
  title: string | undefined;
  content: string | undefined;
  userId: number | undefined;
  tabId: number | undefined;
  isImportant: boolean;
  deadLine: Date | null;
};
