import { NextApiRequest, NextApiResponse } from 'next';
import { deleteTab, fetchTab, updateTab } from '../../../services/tabService';
import { DeleteTabRequest } from '../../../types/tab/request/DeleteTabRequest';
import { Tab } from '../../../types/tab/Tab';
import { deleteTasksByTabId } from '../../../services/taskService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, tabId }: DeleteTabRequest = req.body;
  try {
    const tab: Tab | null = await fetchTab(tabId);
    if (!tab) return res.status(404).json({ message: 'タブが存在しません。' });
    if (tab.userId !== userId)
      return res
        .status(404)
        .json({ message: 'タブの削除が出来るのは作成者だけです。' });
    await deleteTasksByTabId(tabId);
    await deleteTab(tabId);
    return res.status(200).json({ message: 'タブの削除に成功しました。' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
