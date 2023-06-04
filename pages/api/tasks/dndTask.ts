import { NextApiRequest, NextApiResponse } from 'next';
import { dndTask } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dndTask(req.body);
    return res.status(200).json({ message: '' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
