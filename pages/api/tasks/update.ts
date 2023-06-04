import { NextApiRequest, NextApiResponse } from 'next';
import { UpdateTaskRequest } from '../../../types/task/request/UpdateTaskRequest';
import { fetchTaskById, updateTask } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { taskId, userId, ...other }: UpdateTaskRequest = req.body;
  try {
    const task = await fetchTaskById(taskId);
    if (!task)
      return res.status(404).json({ message: 'タスクが存在しません。' });

    if (task.userId !== userId)
      return res
        .status(404)
        .json({ message: '自分で作成したタスク以外、変更できません。' });

    await updateTask({ taskId, ...other });
    return res.status(200).json({ message: 'タスクの更新に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
