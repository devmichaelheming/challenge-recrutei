import { calculateDaysLeft } from '~/lib/utils/functions';

import { UseCardProps } from './types';

export const useCard = ({ task }: UseCardProps) => {
  const daysLeft = calculateDaysLeft(task.date);

  return { daysLeft };
};
