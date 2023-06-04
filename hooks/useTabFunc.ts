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

const useTabFunc = () => {
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const dispatch = useDispatch();

  const createTab = async (
    args: AxiosRequestConfig<CreateTabRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/create`,
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

  const updateTab = async (
    args: AxiosRequestConfig<UpdateTabRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/update`,
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

  const updateFilterType = async (
    args: AxiosRequestConfig<updateFilterTypeRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/updateFilterType`,
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

  const deleteTab = async (
    args: AxiosRequestConfig<DeleteTabRequest>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tabs/delete`,
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

  const dndTab = async (
    args: AxiosRequestConfig<DndTabRequest[]>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/tasks/dndTab`,
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

  return { createTab, updateTab, updateFilterType, deleteTab, dndTab };
};

export default useTabFunc;
