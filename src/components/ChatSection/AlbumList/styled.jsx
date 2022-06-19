import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  padding: 8px 16px;
`;

export const Photo = styled.div`
  width: 120px;
  height: 290px;
  cursor: pointer;

  &:not(:last-of-type) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;
