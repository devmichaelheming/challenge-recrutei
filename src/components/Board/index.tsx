import { Task } from '~/types';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import Column from '../Column';
import S from './styles';
const Board: FC = (): ReactElement => {
  const [completed, setCompleted] = useState<Array<Task>>([]);
  const [incomplete, setIncomplete] = useState<Array<Task>>([]);
  const [backlog, setBacklog] = useState<Array<Task>>([]);
  const [inReview, setInReview] = useState<Array<Task>>([]);

  const getItemsForColumn = (columnId: string) => {
    switch (columnId) {
      case '1':
        return incomplete;
      case '2':
        return completed;
      case '3':
        return inReview;
      case '4':
        return backlog;
      default:
        return [];
    }
  };

  const updateColumnState = (columnId: string, items: Array<Task>) => {
    switch (columnId) {
      case '1':
        setIncomplete(items);
        break;
      case '2':
        setCompleted(items);
        break;
      case '3':
        setInReview(items);
        break;
      case '4':
        setBacklog(items);
        break;
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    if (source.droppableId === destination.droppableId) {
      const columnId = source.droppableId;
      const items = getItemsForColumn(columnId);

      const [movedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, movedItem);

      updateColumnState(columnId, items);
    } else {
      const sourceColumnId = source.droppableId;
      const destinationColumnId = destination.droppableId;

      const sourceItems = getItemsForColumn(sourceColumnId);
      const destinationItems = getItemsForColumn(destinationColumnId);

      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      updateColumnState(sourceColumnId, sourceItems);
      updateColumnState(destinationColumnId, destinationItems);
    }
  };

  // TODO: IMPLEMENTAR FLUXO DE REQUISIÇÕES(CRUD DE TASKS)
  // OBS: PELO OQUE OBSERVEI, OS DADOS SÃO SALVOS APENAS TODOS DE UMA VEZ SÓ, NÃO POSSO FAZER UM POST ÚNICO DE UMA TASK(VERIFICAR MELHOR ESTE CASO)

  useEffect(() => {
    fetch('https://api.npoint.io/21c80c25ed65b6f3484f')
      .then(response => response.json())
      .then(json => {
        setCompleted(json.filter((task: Task) => task.completed));
        setIncomplete(json.filter((task: Task) => !task.completed));
      });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: 'center' }}>PROGRESS BOARD</h2>

      <S.Container>
        <Column title={'IDEIAS'} tasks={incomplete} id={'1'} />
        <Column title={'A FAZER'} tasks={completed} id={'2'} />
        <Column title={'FAZENDO'} tasks={inReview} id={'3'} />
        <Column title={'FEITO'} tasks={backlog} id={'4'} />
      </S.Container>
    </DragDropContext>
  );
};

export default Board;
