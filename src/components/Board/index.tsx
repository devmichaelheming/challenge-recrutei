import { LeftOutlined, LoadingOutlined, RightOutlined } from '@ant-design/icons';
import LogoRecrutei from '~/assets/images/logo.svg';
import { Spin } from 'antd';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column';
import { Form } from './components/Form';
import S from './styles';
import { useBoard } from './useBoard';

const Board: FC = (): ReactElement => {
  const {
    handleDragEnd,
    isLoading,
    backlog,
    doing,
    development,
    developed,
    handleOpenModalForView,
    setIsModal,
    isModal,
    data,
    mutate,
    isMode,
    setIsMode,
    taskSelected,
    setTaskSelected
  } = useBoard();

  return (
    <S.Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <S.Header>
          <Image src={LogoRecrutei} />
          <S.TitleHeader>Teste vaga front</S.TitleHeader>
        </S.Header>
        <S.SectionButton>
          <S.Button onClick={() => setIsModal(true)}>
            <span>Adicionar tarefa</span>
          </S.Button>
        </S.SectionButton>

        <S.SectionPagination>
          <S.Pagination style={{ backgroundColor: '#adb8cb83' }}>
            <LeftOutlined />
          </S.Pagination>

          <S.Pagination>
            <RightOutlined />
          </S.Pagination>
        </S.SectionPagination>

        {isLoading ? (
          <S.SpinContainer>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 58 }} spin />} />
          </S.SpinContainer>
        ) : (
          <S.Content>
            <Column
              title={'Ideias'}
              tasks={backlog}
              id="1"
              handleOpenModalForView={handleOpenModalForView}
            />
            <Column
              title={'A fazer'}
              tasks={doing}
              id="2"
              handleOpenModalForView={handleOpenModalForView}
            />
            <Column
              title={'Fazendo'}
              tasks={development}
              id="3"
              handleOpenModalForView={handleOpenModalForView}
            />
            <Column
              title={'Feito'}
              tasks={developed}
              id="4"
              handleOpenModalForView={handleOpenModalForView}
            />
          </S.Content>
        )}
      </DragDropContext>

      <Form
        isModal={isModal}
        setIsModal={setIsModal}
        data={data}
        mutate={mutate}
        setIsMode={setIsMode}
        isMode={isMode}
        taskSelected={taskSelected}
        setTaskSelected={setTaskSelected}
      />
    </S.Container>
  );
};

export default Board;
