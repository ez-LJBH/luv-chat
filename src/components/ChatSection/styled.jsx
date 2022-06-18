import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: inherit;
`;

export const ChatBox = styled.div`
  height: inherit;
  width: calc(100% - 320px);
`;

export const ChatContent = styled.div`
  height: calc(100% - 160px);
  width: 100%;
  background-color: #fcdefd;
  overflow-y: scroll;
`;

export const ChatTextarea = styled.div`
  height: 160px;
  padding: 12px;
  background-color: #cfebfa;
`;

export const AlbumBox = styled.div`
  width: 320px;
  background-color: 1px solid #c7b9ba;
`;
