export type Status = 'backlog' | 'doing' | 'development' | 'developed';

export interface TaskProps {
  id: string;
  date: string;
  title: string;
  status: Status;
  description: string;
  responsible: Array<string>;
}
