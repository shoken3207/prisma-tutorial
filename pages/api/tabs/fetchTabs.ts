import { NextApiRequest, NextApiResponse } from 'next';
import { FetchTabsRequest } from '../../../types/tab/request/FetchTabsRequest';
import { fetchTabs } from '../../../services/tabService';
import { Tab } from '../../../types/tab/Tab';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId }: FetchTabsRequest = req.body;
  try {
    const tabs: Tab[] = await fetchTabs(userId);
    if (tabs.length === 0)
      return res
        .status(404)
        .json({ message: 'タブが存在しません。', tabs: [] });
    return res.status(200).json({ message: '', tabs });
  } catch (err) {
    return res.status(500).json(err);
  }
};
