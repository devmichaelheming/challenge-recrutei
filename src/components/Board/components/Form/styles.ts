import { handleColorDaysLeft } from '~/lib/utils/functions';
import { Form as FormAntd, Modal as ModalAntd } from 'antd';
import styled from 'styled-components';

export const Modal = styled(ModalAntd)`
  position: relative;

  .ant-modal-content {
    padding: 0;
    border-radius: 24px !important;

    .ant-modal-close {
      border-top-right-radius: 24px;
    }

    .ant-modal-header {
      padding: 12px 16px;
      border-radius: 24px 24px 24px 24px !important;

      .ant-modal-title {
        font-size: 18px;
      }
    }

    .ant-modal-body {
      padding: 6px 16px 6px 16px;
      overflow: auto;
      max-height: 512px;

      ::-webkit-scrollbar {
        width: 16px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #adb5bd;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: #dee2e6;
      }
    }

    .ant-modal-footer {
      padding: 12px 16px;
      border-radius: 0px 0px 8px 8px !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      bottom: 0;
      background: #fff;
      z-index: 99;
    }
  }
`;

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-top: 16px;

  input {
    border-radius: 24px;
    height: 40px;
  }

  textarea {
    border-radius: 24px;
    padding: 12px;
  }

  .ant-select-selector {
    border-radius: 24px !important;
    height: 40px;

    .ant-select-selection-item {
      border-radius: 8px;
    }
  }

  .ant-picker {
    width: 50%;
    border-radius: 24px !important;
  }

  .ant-form-item-explain-error {
    padding-left: 8px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #4169e1;
  height: 40px;
  width: 100%;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3353b5;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -58px;
  left: 45%;

  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  cursor: pointer;

  svg {
    font-size: 16px;
  }
`;

export const ViewDescription = styled.div`
  border-radius: 12px;
  background-color: #f1f3f6;
  margin: 18px 0 14px 0;
  padding: 16px 12px;
  color: #747f93;
`;

const SectionDate = styled.div<{ daysLeft: number }>`
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 12px;
  padding: 8px;
  margin: 16px 0;
  position: absolute;
  top: -15px;
  right: 4px;

  span {
    font-size: 12px;

    &:nth-child(1) {
      color: ${({ daysLeft }) => handleColorDaysLeft(daysLeft)};
      font-weight: 600;
    }

    &:nth-child(2) {
      color: #333333;
      border: 1px dashed #333333;
      border-radius: 8px;
      padding: 6px;
    }
  }
`;

export default {
  Modal,
  Form,
  Button,
  CloseButton,
  ViewDescription,
  SectionDate
};
