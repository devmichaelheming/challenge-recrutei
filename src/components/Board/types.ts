import { Moment } from 'moment';

export interface FormValuesProps {
  date: Moment;
  description: string;
  title: string;
  responsible: Array<string>;
}
