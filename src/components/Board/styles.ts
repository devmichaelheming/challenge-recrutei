import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 16px;
  column-gap: 24px;
  border-radius: 24px;
  margin-bottom: 2px;
`;

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  padding: 24px 48px;

  @media (min-width: 1280px) {
    width: 100%;
  }
`;

export const TitleHeader = styled.div`
  font-weight: 700;
  color: #4169e1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 16px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #dee2e6;
  }

  @media (min-width: 1280px) {
    overflow-x: auto;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  background-color: #ffffff;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin: 0 auto;
  padding: 16px 0;
`;

export const Button = styled.div`
  width: 114px;
  height: 40px;
  background-color: #4169e1;
  padding: 12px, 16px, 12px, 16px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #2d4fb6;
  }

  span {
    color: #fff;
    font-size: 12px;
  }
`;

export const SpinContainer = styled.div`
  padding-top: 160px;
`;

export const SectionPagination = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  justify-content: flex-end;
  column-gap: 12px;
`;

export const Pagination = styled.div`
  border-radius: 50%;
  height: 40px;
  background: #fff;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default {
  Container,
  Header,
  TitleHeader,
  Content,
  SectionButton,
  Button,
  SpinContainer,
  SectionPagination,
  Pagination
};
