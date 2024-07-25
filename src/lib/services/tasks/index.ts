import useAxios from '~/lib/hooks/useAxios';
import { TaskProps } from '~/types';

type FilerType = () => Promise<Array<TaskProps>>;

type RequestRecordResponseStringType = (registro: Array<TaskProps>) => Promise<Response>;

export interface ServiceType {
  get: FilerType;
  save: RequestRecordResponseStringType;
}

const useTaskService = (): ServiceType => {
  const api = useAxios();

  const get: FilerType = () =>
    api
      .get<Array<TaskProps>>('')
      .then(response => response.data)
      .catch(error => ({ ...error?.response?.data, sucesso: false }));

  const save: RequestRecordResponseStringType = registro =>
    api
      .post<Response>('', registro)
      .then(response => response.data)
      .catch(error => ({ ...error?.response?.data, sucesso: false }));

  return {
    get,
    save
  };
};

export default useTaskService;
