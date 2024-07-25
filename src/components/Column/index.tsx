import React, { FC, ReactElement } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card';
import S from './styles';
import { ColumnProps } from './types';

const Column: FC<ColumnProps> = ({ title, tasks, id, handleOpenModalForView }): ReactElement => {
  return (
    <S.Container className="column">
      <S.Title>{title}</S.Title>
      <S.SubTitle>
        {`${tasks.length > 1 ? `${tasks.length} tarefas` : `${tasks.length} tarefa`}`}
      </S.SubTitle>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <S.TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card
                key={index}
                index={index}
                task={task}
                handleOpenModalForView={handleOpenModalForView}
              />
            ))}
            {provided.placeholder}
          </S.TaskList>
        )}
      </Droppable>
    </S.Container>
  );
};

export default Column;
