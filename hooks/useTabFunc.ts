import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { setInfo } from '../features/snackbarInfo/snackbarInfoSlice';
import { show } from '../features/snackbarIsShow/snackbarIsShowSlice';
import { CreateTabRequest } from '../types/tab/request/CreateTabRequest';
import { UpdateTabRequest } from '../types/tab/request/updateTabRequest';
import { DeleteTabRequest } from '../types/tab/request/DeleteTabRequest';
import { BaseApiResponse } from '../types/BaseApiResponse';
import { DndTabRequest } from '../types/tab/request/DndTabRequest';
import { updateFilterTypeRequest } from '../types/tab/request/UpdateFilterTypeRequest';
import { BaseHooksResponse } from '../types/BaseHooksResponse';

const useTabFunc = () => {
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const dispatch = useDispatch();

  const createTab = async (
    args: AxiosRequestConfig<CreateTabRequest>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/create`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
        return;
      }
      return { success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false };
    }
  };

  const updateTab = async (
    args: AxiosRequestConfig<UpdateTabRequest>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/update`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
        return;
      }
      return { success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false };
    }
  };

  const updateFilterType = async (
    args: AxiosRequestConfig<updateFilterTypeRequest>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/updateFilterType`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
        return;
      }
      return { success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false };
    }
  };

  const deleteTab = async (
    args: AxiosRequestConfig<DeleteTabRequest>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/delete`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
        return;
      }
      return { success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false };
    }
  };

  const dndTab = async (
    args: AxiosRequestConfig<DndTabRequest[]>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/dndTab`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
        return;
      }
      return { success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false };
    }
  };

  return { createTab, updateTab, updateFilterType, deleteTab, dndTab };
};

export default useTabFunc;
