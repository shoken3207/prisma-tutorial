import { NextApiRequest, NextApiResponse } from 'next';
import { dndTab } from '../../../services/tabService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dndTab(req.body);
    return res.status(200).json({ message: '' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
