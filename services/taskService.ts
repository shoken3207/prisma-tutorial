import prisma from '../lib/prisma';
import { CreateTaskRequest } from '../types/task/request/CreateTaskRequest';
import { DndTaskRequest } from '../types/task/request/DndTaskRequest';
import { FetchTasksRequest } from '../types/task/request/FetchTasksByTagRequest';
import { Task } from '../types/task/Task';

const fetchTasks = async (args: FetchTasksRequest): Promise<Task[]> => {
  const { userId, tabId } = args;
  const tasks: Task[] = await prisma.task.findMany({
    where: { userId, tabId },
    orderBy: { order: 'asc' },
  });

  return tasks;
};

const fetchTaskById = async (taskId: number): Promise<Task | null> => {
  const task: Task | null = await prisma.task.findUnique({
    where: { id: taskId },
  });

  return task;
};

// 直近のタスク
const fetchRecentTask = async (tabId: number): Promise<Task | null> => {
  const task = await prisma.task.findFirst({
    where: { tabId },
    orderBy: {
      order: 'desc',
    },
  });
  return task;
};

// 優先タスク
const fetchImportantTasks = async (
  args: FetchTasksRequest
): Promise<Task[]> => {
  const tasks = await prisma.task.findMany({
    where: { ...args, isImportant: true },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 完了済みタスク
const fetchDoneTasks = async (args: FetchTasksRequest): Promise<Task[]> => {
  const tasks = await prisma.task.findMany({
    where: { ...args, isDone: true },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 未完了タスク
const fetchUndoneTasks = async (args: FetchTasksRequest): Promise<Task[]> => {
  const tasks = await prisma.task.findMany({
    where: { ...args, isDone: false },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 期限付きタスク
const fetchDeadLineTasks = async (args: FetchTasksRequest): Promise<Task[]> => {
  const tasks = await prisma.task.findMany({
    where: { ...args, deadLine: { not: null } },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 期限が今日までのタスク
const fetchDeadLineTodayTasks = async (
  args: FetchTasksRequest
): Promise<Task[]> => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tasks = await prisma.task.findMany({
    where: { ...args, deadLine: { lte: today } },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 期限が1週間後までのタスク
const fetchDeadLineOneWeekTasks = async (
  args: FetchTasksRequest
): Promise<Task[]> => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneWeekLater = new Date(
    today.getTime() +
      WEEK_TO_DAYS *
        DAY_TO_HOURS *
        HOURS_TO_MINUTES *
        MINUTES_TO_SECONDS *
        SECONDS_TO_MILLISECONDS
  );
  const tasks = await prisma.task.findMany({
    where: { ...args, deadLine: { gte: today, lte: oneWeekLater } },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

// 期限切れのタスク
const fetchDeadLinePassedTasks = async (
  args: FetchTasksRequest
): Promise<Task[]> => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tasks = await prisma.task.findMany({
    where: { ...args, deadLine: { lt: today } },
    orderBy: { order: 'asc' },
  });
  return tasks;
};

const createTask = async (
  args: CreateTaskRequest & { order: number }
): Promise<void> => {
  await prisma.task.create({
    data: args,
  });
};

const dndTask = async (args: DndTaskRequest[]): Promise<void> => {
  await Promise.all(
    args.map(async (arg: DndTaskRequest) => {
      const { taskId, order } = arg;
      await prisma.task.update({ where: { id: taskId }, data: { order } });
    })
  );
};

const updateTask = async (args: {
  taskId: number;
  title: string;
  content: string;
  isImportant: boolean;
  deadLine: Date | null;
}): Promise<void> => {
  const { taskId, ...other } = args;
  await prisma.task.update({
    where: { id: taskId },
    data: other,
  });
};

const deleteTask = async (taskId: number): Promise<void> => {
  await prisma.task.delete({ where: { id: taskId } });
};

const deleteTasksByTabId = async (tabId: number): Promise<void> => {
  await prisma.task.deleteMany({ where: { tabId } });
};

const doneTask = async ({
  taskId,
  isDone,
}: {
  taskId: number;
  isDone: boolean;
}): Promise<void> => {
  await prisma.task.update({ where: { id: taskId }, data: { isDone } });
};

export {
  fetchTaskById,
  fetchRecentTask,
  fetchTasks,
  fetchImportantTasks,
  fetchDoneTasks,
  fetchUndoneTasks,
  fetchDeadLineTasks,
  fetchDeadLinePassedTasks,
  fetchDeadLineTodayTasks,
  fetchDeadLineOneWeekTasks,
  createTask,
  updateTask,
  dndTask,
  deleteTask,
  deleteTasksByTabId,
  doneTask,
};
