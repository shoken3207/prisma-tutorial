import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTab, updateTab } from '../../../services/tabService';
import { UpdateTabRequest } from '../../../types/tab/request/updateTabRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, tabId, tabName }: UpdateTabRequest = req.body;
  try {
    const tab = await fetchTab(tabId);
    if (!tab) return res.status(404).json({ message: 'タブが存在しません。' });
    if (tab.userId !== userId)
      return res
        .status(404)
        .json({ message: 'タブの編集が出来るのは作成者だけです。' });
    await updateTab({ tabId, tabName });
    return res.status(200).json({ message: 'タブの編集に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
