import { NextApiRequest, NextApiResponse } from 'next';
import { createTab, fetchRecentTab } from '../../../services/tabService';
import { CreateTabRequest } from '../../../types/tab/request/CreateTabRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, tabName }: CreateTabRequest = req.body;
  try {
    const recentTab = await fetchRecentTab(userId);
    const order = !!recentTab ? recentTab.order + 1 : 1;
    await createTab({ userId, tabName, order });
    return res.status(200).json({ message: 'タブの作成に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
