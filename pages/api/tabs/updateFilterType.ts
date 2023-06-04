import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTab, updateFilterType } from '../../../services/tabService';
import { updateFilterTypeRequest } from '../../../types/tab/request/UpdateFilterTypeRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, tabId, filterType }: updateFilterTypeRequest = req.body;
  try {
    const tab = await fetchTab(tabId);
    if (!tab) return res.status(404).json({ message: 'タブが存在しません。' });
    if (tab.userId !== userId)
      return res
        .status(404)
        .json({ message: 'あなたが作成したタブではありません。' });
    await updateFilterType({ tabId, filterType });
    return res.status(200).json({ message: '' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
