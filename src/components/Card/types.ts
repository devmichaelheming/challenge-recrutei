import { TaskProps } from '~/types';

export interface CardProps {
  task: TaskProps;
  index: number;
  handleOpenModalForView: (task: TaskProps) => void;
}

export interface UseCardProps {
  task: TaskProps;
}
