import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  > svg {
    top: 16px;
    right: 12px;
    position: absolute;
    color: #ff0000;
    pointer-events: painted;
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  > span {
    max-width: 160px;
    width: 100%;
    padding: 20px 10px;
    top: -55px;
    right: -60px;
    position: absolute;
    border-radius: 8px;
    visibility: hidden;
    opacity: 0;
    color: #fff;
    background: #ff0000;
    transition: visibility 0.4s ease, opacity 0.4s ease;

    &::before {
      content: '';
      width: 0;
      height: 0;
      left: 50%;
      bottom: -10px;
      top: 100%;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #ff0000;
      transform: translateX(-50%);
    }
  }
`;
