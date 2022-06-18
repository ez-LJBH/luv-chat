import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 32px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c5c5c6;

  & > :not(:first-child) {
    margin-left: 8px;
  }

  & > div:first-of-type {
    display: flex;

    & > div {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border: 1px solid #c5c5c6;
      border-radius: 3px;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c5c5c6;
    }
  }

  & > div:last-of-type {
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    width: 40px;
    height: 24px;
    border: 1px solid #c5c5c6;
    border-radius: 3px;
    padding: 4px;
  }
`;
