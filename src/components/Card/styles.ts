import { handleColorDaysLeft } from '~/lib/utils/functions';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
  isDraggable?: boolean;
  isBacklog?: boolean;
  isDeveloped: boolean;
}

const Container = styled.div<ContainerProps>`
  border-radius: 24px;
  padding: 16px;
  color: #000;
  margin-bottom: 8px;
  min-height: 120px;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgreen' : '#FFF')};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  row-gap: 8px;
  flex-direction: column;
  border: ${({ isDeveloped }) => (isDeveloped ? '#63B150' : '#FFF')};
  position: relative;

  ${({ isDeveloped }) =>
    isDeveloped &&
    css`
      border: 1px solid #63b150;
    `};
`;

const Title = styled.div`
  font-weight: 600;
  color: #333333;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #747f93;
`;

const SectionDate = styled.div<{ daysLeft: number }>`
  border: 1px dashed #747f93;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 16px 0;

  span {
    &:nth-child(1) {
      color: #747f93;
    }

    &:nth-child(2) {
      color: ${({ daysLeft }) => handleColorDaysLeft(daysLeft)};
      font-weight: 600;
    }
  }
`;

const SectionResponsible = styled.div`
  display: flex;
  column-gap: 8px;
`;

const Responsible = styled.button`
  background-color: #1e90ff !important;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: auto;
`;

const SectionBookmark = styled.div`
  position: absolute;
  top: -5px;
`;

export default {
  Container,
  Title,
  Description,
  SectionDate,
  SectionResponsible,
  Responsible,
  SectionBookmark
};
