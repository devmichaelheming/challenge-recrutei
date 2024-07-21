import { Task } from '~/types';
import React, { FC, ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import S from './styles';

interface CardProps {
  task: Task;
  index: number;
}

const Card: FC<CardProps> = ({ task, index }): ReactElement => {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <S.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>#{task.id}</small>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            <S.TextContent>{task.title}</S.TextContent>
          </div>
          <S.Icons>
            <div>
              {/* <Avatar
                onClick={() => console.log(task)}
                src={'https://joesch.moe/api/v1/random?key=' + task.id}
              /> */}
              avatar
            </div>
          </S.Icons>
          {/* {provided.placeholder} */}
          place
        </S.Container>
      )}
    </Draggable>
  );
};

export default Card;
