import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  position: relative;

  > label {
    top: 18px;
    left: 35px;
    position: absolute;
    pointer-events: none;
    transition: all 0.4s;
  }

  > svg {
    top: 18px;
    left: 10px;
    position: absolute;
    transition: color 0.4s;
  }

  div.react-datepicker-wrapper {
    width: 100%;
    > div {
      width: 100%;
    }
  }

  ${(props) =>
    props.isActiveFocus &&
    css`
      div.react-datepicker-wrapper ~ label {
        top: 5px;
        left: 10px;
        font-size: 10px;
        color: #008080;
      }
      div.react-datepicker-wrapper ~ svg {
        color: #008080;
      }
    `}
`;

export const InputDate = styled(DatePicker)`
  max-width: 300px;
  width: 100%;
  padding: 18px 30px 16px 35px;
  border: 1px solid #000;
  border-radius: 8px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #ff0000;
    `}

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 5px;
    left: 10px;
    font-size: 10px;
    color: #008080;
  }

  &:focus ~ svg,
  &:not(:placeholder-shown) ~ svg {
    color: #008080;
  }
`;

export const InputElement = styled(InputMask)`
  max-width: 300px;
  width: 100%;
  padding: 18px 30px 16px 35px;
  border: 1px solid #000;
  border-radius: 8px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #ff0000;
    `}

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 5px;
    left: 10px;
    font-size: 10px;
    color: #008080;
  }

  &:focus ~ svg,
  &:not(:placeholder-shown) ~ svg {
    color: #008080;
  }
`;

export const Error = styled(Tooltip)`
  z-index: 10;
  height: 20px;
  right: 10px;
  top: 15px;
  position: absolute;
`;
