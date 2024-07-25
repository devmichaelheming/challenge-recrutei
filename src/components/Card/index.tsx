import BookmarkIcon from '~/assets/images/bookmark.svg';
import { truncateDescription } from '~/lib/utils/functions';
import moment from 'moment';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import S from './styles';
import { CardProps } from './types';
import { useCard } from './useCard';

const Card: FC<CardProps> = ({ task, index, handleOpenModalForView }): ReactElement => {
  const { daysLeft } = useCard({ task });

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <S.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDeveloped={task.status === 'developed'}
          onClick={() => handleOpenModalForView(task)}
        >
          {task.status === 'developed' && (
            <S.SectionBookmark>
              <Image src={BookmarkIcon} />
            </S.SectionBookmark>
          )}

          <S.Title>{task.title}</S.Title>

          <S.Description>{truncateDescription(task.description, 100)}</S.Description>

          <S.SectionDate daysLeft={daysLeft.value}>
            <span>Data limite: {moment(task.date).format('DD/MM')}</span>
            <span>{daysLeft.label}</span>
          </S.SectionDate>

          <S.SectionResponsible>
            {task.responsible.map(item => (
              <S.Responsible key={item}>{item}</S.Responsible>
            ))}
          </S.SectionResponsible>
        </S.Container>
      )}
    </Draggable>
  );
};

export default Card;
