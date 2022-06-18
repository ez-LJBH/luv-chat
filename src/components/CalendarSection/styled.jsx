import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  & > div:first-child {
    width: calc(100% - 200px);
    height: 100%;
  }

  & > div:last-child {
    width: 200px;
    height: 100%;
  }
`;
