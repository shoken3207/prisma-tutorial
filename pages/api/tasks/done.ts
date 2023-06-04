import { NextApiRequest, NextApiResponse } from 'next';
import { doneTask, fetchTaskById } from '../../../services/taskService';
import { DoneTaskRequest } from '../../../types/task/request/DoneTaskRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, taskId, isDone }: DoneTaskRequest = req.body;
  try {
    const task = await fetchTaskById(taskId);
    if (!task)
      return res.status(404).json({ message: 'タスクが存在しません。' });

    if (task.userId !== userId)
      return res
        .status(404)
        .json({ message: '自分で作成したタスクではありません。。' });

    await doneTask({ taskId, isDone });
    return res.status(200).json({ message: '' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
