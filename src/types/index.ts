export interface Task {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export interface ColumnProps {
  title: string;
  tasks: Array<Task>;
  id: string;
}
