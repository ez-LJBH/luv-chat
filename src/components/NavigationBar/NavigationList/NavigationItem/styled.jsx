import styled from "styled-components";

export const Wrapper = styled.div`
  height: 40px;
  padding: 8px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #5e5e5e;
    color: #eee;
  }

  & > div:first-child {
    margin-right: 16px;
  }
`;
