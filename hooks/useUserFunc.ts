import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { RegisterRequest } from '../types/user/request/RegisterRequest';
import { setInfo } from '../features/snackbarInfo/snackbarInfoSlice';
import { show } from '../features/snackbarIsShow/snackbarIsShowSlice';
import { User } from '../types/user/User';
import { RegisterResponse } from '../types/user/response/RegisterResponse';
import { BaseApiResponse } from '../types/BaseApiResponse';
import { BaseHooksResponse } from '../types/BaseHooksResponse';

const useUserFunc = () => {
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const dispatch = useDispatch();

  const register = async (
    args: AxiosRequestConfig<RegisterRequest>
  ): Promise<{ user: User | undefined } & BaseHooksResponse> => {
    try {
      const { message, user }: RegisterResponse = await axios.post(
        `${BASE_API_URL}/user/register`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return { user, success: true };
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return { success: false, user: undefined };
    }
  };

  const deleteUser = async (
    userId: AxiosRequestConfig<number>
  ): Promise<BaseHooksResponse | undefined> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/user/register`,
        { userId }
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

  return { register, deleteUser };
};

export default useUserFunc;
