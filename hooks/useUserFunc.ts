import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { RegisterRequest } from '../types/user/request/RegisterRequest';
import { setInfo } from '../features/snackbarInfo/snackbarInfoSlice';
import { show } from '../features/snackbarIsShow/snackbarIsShowSlice';
import { User } from '../types/user/User';
import { RegisterResponse } from '../types/user/response/RegisterResponse';
import { BaseApiResponse } from '../types/BaseApiResponse';

const useUserFunc = () => {
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const dispatch = useDispatch();

  const register = async (
    args: AxiosRequestConfig<RegisterRequest>
  ): Promise<User | undefined> => {
    try {
      const { message, user }: RegisterResponse = await axios.post(
        `${BASE_API_URL}/user/register`,
        args
      );
      if (!!message) {
        dispatch(setInfo({ text: message, severity: 'warning' }));
        dispatch(show());
      }
      return user;
    } catch (err) {
      const { response } = err as { response: any };
      dispatch(setInfo({ text: response.message, severity: 'warning' }));
      dispatch(show());
      return;
    }
  };

  const deleteUser = async (
    userId: AxiosRequestConfig<number>
  ): Promise<void> => {
    try {
      const { message }: BaseApiResponse = await axios.post(
        `${BASE_API_URL}/user/register`,
        { userId }
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

  return { register, deleteUser };
};

export default useUserFunc;
