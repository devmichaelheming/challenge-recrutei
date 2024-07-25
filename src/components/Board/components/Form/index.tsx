import { CloseOutlined } from '@ant-design/icons';
import { formatNames } from '~/lib/utils/functions';
import { DatePicker, Form as FormAntd, Input, Select } from 'antd';
import moment from 'moment';
import React, { FC, ReactElement } from 'react';

import { optionsMock } from './constants/optionsMock';
import S from './styles';
import { FormProps } from './types';
import { useForm } from './useForm';

const { TextArea } = Input;

export const Form: FC<FormProps> = ({
  isModal,
  setIsModal,
  data,
  mutate,
  setIsMode,
  isMode,
  taskSelected,
  setTaskSelected
}): ReactElement => {
  const { handleCloseForm, renderButtonsFooter, daysLeft, form, handleSendData } = useForm({
    setIsModal,
    data,
    mutate,
    setIsMode,
    taskSelected,
    setTaskSelected
  });

  return (
    <S.Modal
      title={`${isMode === 'view' ? taskSelected.title : 'Adicionar tarefa'}`}
      open={isModal}
      closable={false}
      onCancel={handleCloseForm}
      footer={isMode !== 'view' && renderButtonsFooter()}
    >
      <S.CloseButton onClick={handleCloseForm}>
        <CloseOutlined />
      </S.CloseButton>

      <span>
        {isMode === 'view'
          ? `Responsáveis: ${formatNames(taskSelected.responsible)}`
          : 'Preencha os detalhes da nova tarefa'}
      </span>

      {isMode === 'view' ? (
        <>
          <S.ViewDescription>{taskSelected.description}</S.ViewDescription>

          <S.SectionDate daysLeft={daysLeft.value}>
            <span>{daysLeft.label}</span>
            <span>{moment(taskSelected.date).format('DD/MM')}</span>
          </S.SectionDate>
        </>
      ) : (
        <S.Form form={form} layout="vertical" onFinish={handleSendData} autoComplete="off">
          <FormAntd.Item
            name="title"
            label="Titulo da tarefa"
            rules={[{ required: true, message: 'O titulo é obrigatório' }]}
          >
            <Input placeholder="Informe o titulo da tarefa" />
          </FormAntd.Item>

          <FormAntd.Item
            name="description"
            label="Descrição da tarefa"
            rules={[{ required: true, message: 'A descrição é obrigatória' }]}
          >
            <TextArea
              id="input-Descricao"
              placeholder="Informe a descrição do item"
              maxLength={1000}
              autoSize={{ minRows: 5, maxRows: 5 }}
              showCount
            />
          </FormAntd.Item>

          <FormAntd.Item
            name="responsible"
            label="Responsáveis"
            rules={[{ required: true, message: 'O responsável é obrigatório' }]}
          >
            <Select mode="multiple" placeholder="Selecione os responsáveis" options={optionsMock} />
          </FormAntd.Item>

          <FormAntd.Item
            name="date"
            label="Data limite"
            rules={[{ required: true, message: 'O responsável é obrigatório' }]}
          >
            <DatePicker format="DD/MM/YYYY" placeholder="Data:" />
          </FormAntd.Item>
        </S.Form>
      )}
    </S.Modal>
  );
};
