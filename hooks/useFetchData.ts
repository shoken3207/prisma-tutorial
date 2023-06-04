import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { FetchTasksRequest } from '../types/task/request/FetchTasksByTagRequest';
import { Task } from '../types/task/Task';
import { setInfo } from '../features/snackbarInfo/snackbarInfoSlice';
import { Tab } from '../types/tab/Tab';
import { show } from '../features/snackbarIsShow/snackbarIsShowSlice';
import { FetchTabsRequest } from '../types/tab/request/FetchTabsRequest';
import { FetchTabsResponse } from '../types/tab/response/FetchTabsResponse';
import { FetchTasksResponse } from '../types/task/response/FetchTasksResponse';

const useFetchData = () => {
  const dispatch = useDispatch();
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const fetchTabs = async (
    args: AxiosRequestConfig<FetchTabsRequest>
  ): Promise<Tab[]> => {
    try {
      const { tabs, message }: FetchTabsResponse = await axios.get(
        `${BASE_API_URL}/tabs/fetchTabs`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tabs;
    } catch (err) {
      const { response }: { response: FetchTabsResponse } = err as {
        response: any;
      };
      const { message, tabs } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tabs;
    }
  };

  const fetchTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchImportantTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchImportantTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchDoneTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchDoneTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchUnDoneTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchUndoneTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchDeadLineTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchDeadLineTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchDeadLineTodayTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchDeadLineTodayTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchDeadLineOneWeekTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchDeadLineOneWeeksTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  const fetchDeadLinePassedTasks = async (
    args: AxiosRequestConfig<FetchTasksRequest>
  ): Promise<Task[]> => {
    try {
      const { tasks, message }: FetchTasksResponse = await axios.get(
        `${BASE_API_URL}/tasks/fetchDeadLinePassedTasks`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return tasks;
    } catch (err) {
      const { response }: { response: FetchTasksResponse } = err as {
        response: any;
      };
      const { message, tasks } = response;
      dispatch(setInfo({ text: message, severity: 'warning' }));
      dispatch(show());
      return tasks;
    }
  };

  return {
    fetchTabs,
    fetchTasks,
    fetchImportantTasks,
    fetchDoneTasks,
    fetchUnDoneTasks,
    fetchDeadLineTasks,
    fetchDeadLineTodayTasks,
    fetchDeadLineOneWeekTasks,
    fetchDeadLinePassedTasks,
  };
};

export default useFetchData;
