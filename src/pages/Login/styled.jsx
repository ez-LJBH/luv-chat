import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin-bottom: 80px;
  }
`;

export const Header = styled.h1`
  text-align: center;
  color: #fb9ea4;
`;

export const Box = styled.div`
  width: 460px;
  height: 310px;
  border: 1px solid #99a6ad;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 32px 48px;
`;

export const Form = styled.form`
  width: 100%;
  height: 120px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & > div:first-child {
    width: 100%;
    height: 100%;
    border: 1px solid #99a6ad;
    border-radius: 5px;

    & > div {
      height: 50%;
      padding: 8px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &:first-of-type {
        border-bottom: 1px solid #99a6ad;
      }

      & > input {
        border: none;
        width: 100%;
        height: 32px;
        font-size: 20px;
        padding-left: 14px;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }

  & > div:last-child {
    margin-top: 48px;

    & > button {
      width: 100%;
      height: 60px;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: #fb9ea4;
      cursor: pointer;
    }
  }
`;

export const PlaceHolder = styled.div`
  position: absolute;
  left: 48px;
  color: #7a7272;
  font-size: 20px;
`;

export const Footer = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:not(:last-child) {
    margin-right: 16px;

    &::after {
      margin-left: 16px;
      content: "|";
    }
  }

  & > div {
    color: #7a7272;
    cursor: pointer;
    font-size: 16px;
  }
`;
