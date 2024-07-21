import styled from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
  isDraggable?: boolean;
  isBacklog?: boolean;
}

function bgcolorChange(props: ContainerProps) {
  if (props.isDragging) {
    return 'lightgreen';
  }
  if (props.isDraggable) {
    return props.isBacklog ? '#F2D7D5' : '#DCDCDC';
  }
  return props.isBacklog ? '#F2D7D5' : '#EAF4FC';
}

const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 120px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`;

export default {
  Container,
  TextContent,
  Icons
};
