import { ColumnProps } from '~/types';
import React, { FC, ReactElement } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card';
import S from './styles';

const Column: FC<ColumnProps> = ({ title, tasks, id }): ReactElement => {
  return (
    <S.Container className="column">
      <S.Title
        style={{
          backgroundColor: 'lightblue',
          position: 'sticky',
          top: '0'
        }}
      >
        {title}
      </S.Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <S.TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </S.TaskList>
        )}
      </Droppable>
    </S.Container>
  );
};

export default Column;
