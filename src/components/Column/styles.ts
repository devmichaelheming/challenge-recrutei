import styled from 'styled-components';

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 400px;
  height: 900px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#e0ffe0' : '#f4f5f7')};
  flex-grow: 1;
  min-height: 100px;
`;

export default {
  Container,
  Title,
  TaskList
};
