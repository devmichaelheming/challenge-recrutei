import useTaskService from '~/lib/services/tasks';
import { calculateDaysLeft } from '~/lib/utils/functions';
import { TaskProps } from '~/types';
import { Form as FormAntd } from 'antd';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import S from './styles';
import { FormValuesProps, UseFormProps } from './types';

export const useForm = ({
  setIsModal,
  data,
  mutate,
  setIsMode,
  taskSelected,
  setTaskSelected
}: UseFormProps) => {
  const [form] = FormAntd.useForm<FormValuesProps>();
  const service = useTaskService();

  const daysLeft = calculateDaysLeft(taskSelected?.date);

  const handleCloseForm = () => {
    setIsModal(false);
    form.resetFields();
    setIsMode('register');
    setTaskSelected(null);
  };

  const handleSendData = async (values: FormValuesProps) => {
    try {
      const formValues: TaskProps = {
        id: uuidv4(),
        date: moment(values.date).format('YYYY-MM-DD'),
        title: values.title,
        status: 'backlog',
        description: values.description,
        responsible: values.responsible
      };

      const payload = [...data, formValues];

      await service.save(payload);

      handleCloseForm();
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleValidateForm = async () => {
    form
      .validateFields()
      .then(async (values: FormValuesProps) => {
        handleSendData(values);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderButtonsFooter = () => {
    return (
      <S.Button type="submit" onClick={() => handleValidateForm()}>
        Adicionar tarefa
      </S.Button>
    );
  };

  return { handleCloseForm, renderButtonsFooter, daysLeft, form, handleSendData };
};
