import { NextApiRequest, NextApiResponse } from 'next';
import { DeleteTaskRequest } from '../../../types/task/request/DeleteTaskRequest';
import { deleteTask, fetchTaskById } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, taskId }: DeleteTaskRequest = req.body;
  try {
    const task = await fetchTaskById(taskId);
    if (!task)
      return res.status(404).json({ message: 'タスクが存在しません。' });

    if (task.userId !== userId)
      return res
        .status(404)
        .json({ message: '自分で作成したタスク以外、削除できません。' });

    await deleteTask(taskId);
    return res.status(200).json({ message: 'タスクの削除に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
