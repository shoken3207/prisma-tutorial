import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser, fetchUserById } from '../../../services/userService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id }: { id: number } = req.body;
  try {
    const user = await fetchUserById(id);
    if (!user)
      return res.status(404).json({ message: 'ユーザーが存在しません。' });
    await deleteUser(id);
    return res.status(200).json({ message: 'ユーザーの削除に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
