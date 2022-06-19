import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 840px;
  height: calc(100% - 100px);
  padding: 8px 32px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > div {
    width: 360px;
    height: 320px;

    & > div {
      display: flex;
      align-items: center;

      & > h4 {
        font-size: 24px;
        margin: 0;
        margin-right: 8px;
      }

      & > p {
        color: #8e8e8e;
        font-size: 12px;
      }
    }
  }
`;
