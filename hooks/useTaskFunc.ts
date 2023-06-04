import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { setInfo } from '../features/snackbarInfo/snackbarInfoSlice';
import { show } from '../features/snackbarIsShow/snackbarIsShowSlice';
import { CreateTaskRequest } from '../types/task/request/CreateTaskRequest';
import { BaseApiResponse } from '../types/BaseApiResponse';
import { UpdateTaskRequest } from '../types/task/request/UpdateTaskRequest';
import { DeleteTaskRequest } from '../types/task/request/DeleteTaskRequest';
import { DoneTaskRequest } from '../types/task/request/DoneTaskRequest';
import { DndTaskRequest } from '../types/task/request/DndTaskRequest';

const useTaskFunc = () => {
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const dispatch = useDispatch();

  const createTask = async (
    args: AxiosRequestConfig<CreateTaskRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/create`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
    }
  };

  const updateTask = async (
    args: AxiosRequestConfig<UpdateTaskRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/update`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
    }
  };

  const deleteTask = async (
    args: AxiosRequestConfig<DeleteTaskRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/delete`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
    }
  };

  const doneTask = async (
    args: AxiosRequestConfig<DoneTaskRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/done`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
    }
  };

  const dndTask = async (
    args: AxiosRequestConfig<DndTaskRequest[]>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/dndTask`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
    }
  };

  return { createTask, updateTask, deleteTask, doneTask, dndTask };
};

export default useTaskFunc;
