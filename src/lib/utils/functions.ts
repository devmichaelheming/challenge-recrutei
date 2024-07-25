import moment from 'moment';

/**
 * Calcula os dias restantes até uma data específica
 * @param date data no formato 'YYYY-MM-DD'
 * @returns um objeto contendo o valor dos dias restantes e uma mensagem correspondente
 */
export const calculateDaysLeft = (date: string) => {
  const dueDate = moment(date, 'YYYY-MM-DD');
  const today = moment();
  const diffDays = dueDate.diff(today, 'days');

  if (diffDays < 0) {
    const daysLate = Math.abs(diffDays);
    return {
      value: -daysLate,
      label: `Atrasado há ${daysLate} dia${daysLate > 1 ? 's' : ''}`
    };
  } else {
    return {
      value: diffDays,
      label: `Faltam ${diffDays} dias`
    };
  }
};

/**
 * Retorna a cor correspondente ao número de dias restantes
 * @param daysLeft número de dias restantes
 * @returns uma string representando a cor
 */
export const handleColorDaysLeft = (daysLeft: number): string => {
  if (daysLeft < 0) {
    return '#E14942';
  }
  if (daysLeft <= 5) {
    return '#FFA500';
  }
  return '#63B150';
};

/**
 * Formata uma lista de nomes em uma string
 * @param names array de nomes
 * @returns uma string com os nomes formatados
 */
export const formatNames = (names: Array<string>): string => {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length === 2) return names.join(' e ');

  const last = names.pop();
  return `${names.join(', ')} e ${last}`;
};

/**
 * Trunca uma descrição ao comprimento máximo especificado e adiciona "..."
 * @param description descrição a ser truncada
 * @param maxLength comprimento máximo da descrição
 * @returns uma string truncada
 */
export const truncateDescription = (description: string, maxLength: number): string => {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.substring(0, maxLength)}...`;
};
