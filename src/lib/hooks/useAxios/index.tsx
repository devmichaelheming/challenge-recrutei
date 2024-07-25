import axios from 'axios';
import type { AxiosInstance } from 'axios';

function useAxios(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  return api;
}

export default useAxios;
