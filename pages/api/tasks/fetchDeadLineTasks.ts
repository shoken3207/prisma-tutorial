import { NextApiRequest, NextApiResponse } from 'next';
import { FetchTasksRequest } from '../../../types/task/request/FetchTasksByTagRequest';
import { fetchDeadLineTasks } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, tabId }: FetchTasksRequest = req.body;
  try {
    const tasks = await fetchDeadLineTasks({ userId, tabId });

    if (tasks.length === 0)
      return res.status(404).json({ message: 'タスクがありません', tasks: [] });

    return res.status(200).json({ message: '', tasks });
  } catch (err) {
    return res.status(500).json(err);
  }
};
