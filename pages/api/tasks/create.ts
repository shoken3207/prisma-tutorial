import { NextApiRequest, NextApiResponse } from 'next';
import { CreateTaskRequest } from '../../../types/task/request/CreateTaskRequest';
import { createTask, fetchRecentTask } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tabId }: CreateTaskRequest = req.body;
  try {
    const recentTask = await fetchRecentTask(tabId);
    const order = !!recentTask ? recentTask.order + 1 : 1;
    await createTask({
      ...req.body,
      order,
    });
    return res.status(200).json({ message: 'タスクの作成に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
