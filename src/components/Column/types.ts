import { TaskProps } from '~/types';

export interface ColumnProps {
  title: string;
  tasks: Array<TaskProps>;
  id: string;
  handleOpenModalForView: (task: TaskProps) => void;
}
