import useTasksService from '~/lib/services/tasks';
import { TaskProps } from '~/types';
import { useEffect, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import useSWR from 'swr';

export const useBoard = () => {
  const service = useTasksService();
  const [backlog, setBacklog] = useState<Array<TaskProps>>([]);
  const [doing, setDoing] = useState<Array<TaskProps>>([]);
  const [development, setDevelopment] = useState<Array<TaskProps>>([]);
  const [developed, setDeveloped] = useState<Array<TaskProps>>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isMode, setIsMode] = useState<'register' | 'view'>('register');
  const [taskSelected, setTaskSelected] = useState<TaskProps>({} as TaskProps);

  const { data, mutate, isLoading } = useSWR('tasks', async () => service.get());

  const getItemsForColumn = (columnId: string) => {
    const ItItems = {
      '1': backlog,
      '2': doing,
      '3': development,
      '4': developed
    };

    return ItItems[columnId];
  };

  const handleSendData = async (newData: Array<TaskProps>) => {
    try {
      await service.save(newData);
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  const updateColumnState = (columnId: string, items: Array<TaskProps>) => {
    switch (columnId) {
      case '1':
        setBacklog(items);
        break;
      case '2':
        setDoing(items);
        break;
      case '3':
        setDevelopment(items);
        break;
      case '4':
        setDeveloped(items);
        break;
    }

    const statusMap = {
      '1': 'backlog',
      '2': 'doing',
      '3': 'development',
      '4': 'developed'
    };

    const updatedData = data.map(task => {
      const updatedTask = items.find(item => item.id === task.id);
      return updatedTask ? { ...updatedTask, status: statusMap[columnId] } : task;
    });

    handleSendData(updatedData);
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

  const handleOpenModalForView = (task: TaskProps) => {
    setTaskSelected(task);
    setIsModal(true);
    setIsMode('view');
  };

  useEffect(() => {
    if (data) {
      const backlogTasks = data.filter((task: TaskProps) => task.status === 'backlog');
      const doingTasks = data.filter((task: TaskProps) => task.status === 'doing');
      const developmentTasks = data.filter((task: TaskProps) => task.status === 'development');
      const developedTasks = data.filter((task: TaskProps) => task.status === 'developed');

      setBacklog(backlogTasks);
      setDoing(doingTasks);
      setDevelopment(developmentTasks);
      setDeveloped(developedTasks);
    }
  }, [data]);

  return {
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
  };
};
