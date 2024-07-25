import styled from 'styled-components';

const Container = styled.div`
  border-radius: 2.5px;
  width: 348px;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-shrink: 0;
`;

const Title = styled.h3`
  position: sticky;
  text-align: initial;
  color: #2e2e2e;
  padding-bottom: 8px;
  padding-left: 16px;
`;

const SubTitle = styled.span`
  color: #747f93;
  font-size: 14px;
  font-weight: 400;
  padding-left: 16px;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#e0ffe0' : 'transparent')};
  border-radius: 24px;
  flex-grow: 1;
  min-height: 100px;
  margin-top: 36px;
`;

export default {
  Container,
  Title,
  TaskList,
  SubTitle
};
