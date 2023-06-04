import prisma from '../lib/prisma';
import { CreateTabRequest } from '../types/tab/request/CreateTabRequest';
import { DndTabRequest } from '../types/tab/request/DndTabRequest';
import { Tab } from '../types/tab/Tab';

const createTab = async (
  args: CreateTabRequest & {
    order: number;
  }
): Promise<void> => {
  await prisma.tab.create({
    data: args,
  });
};

const updateTab = async (args: {
  tabId: number;
  tabName: string;
}): Promise<void> => {
  const { tabId, tabName } = args;
  await prisma.tab.update({
    data: {
      tabName,
    },
    where: {
      id: tabId,
    },
  });
};

const updateFilterType = async ({
  tabId,
  filterType,
}: {
  tabId: number;
  filterType: number;
}): Promise<void> => {
  await prisma.tab.update({
    data: {
      filterType,
    },
    where: {
      id: tabId,
    },
  });
};

const deleteTab = async (tabId: number): Promise<void> => {
  await prisma.tab.delete({
    where: {
      id: tabId,
    },
  });
};

const dndTab = async (args: DndTabRequest[]): Promise<void> => {
  await Promise.all(
    args.map(async (arg: DndTabRequest) => {
      const { tabId, order } = arg;
      await prisma.tab.update({ where: { id: tabId }, data: { order } });
    })
  );
};

const fetchTabs = async (userId: number): Promise<Tab[] | []> => {
  const tabs: Tab[] = await prisma.tab.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
  return tabs;
};

const fetchTab = async (tabId: number): Promise<Tab | null> => {
  const tab: Tab | null = await prisma.tab.findUnique({ where: { id: tabId } });
  return tab;
};

const fetchRecentTab = async (userId: number): Promise<Tab | null> => {
  const tab: Tab | null = await prisma.tab.findFirst({
    where: { userId },
    orderBy: { order: 'desc' },
  });
  return tab;
};

export {
  createTab,
  updateTab,
  updateFilterType,
  deleteTab,
  dndTab,
  fetchTab,
  fetchTabs,
  fetchRecentTab,
};
