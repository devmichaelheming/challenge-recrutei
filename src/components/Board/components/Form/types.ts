import { TaskProps } from '~/types';
import { Moment } from 'moment';
import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data: Array<TaskProps>;
  mutate: () => void;
  setIsMode: Dispatch<SetStateAction<'register' | 'view'>>;
  isMode: 'register' | 'view';
  taskSelected: TaskProps;
  setTaskSelected: Dispatch<SetStateAction<TaskProps>>;
}

export interface FormValuesProps {
  date: Moment;
  description: string;
  title: string;
  responsible: Array<string>;
}

export interface UseFormProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data: Array<TaskProps>;
  mutate: () => void;
  setIsMode: Dispatch<SetStateAction<'register' | 'view'>>;
  taskSelected: TaskProps;
  setTaskSelected: Dispatch<SetStateAction<TaskProps>>;
}
