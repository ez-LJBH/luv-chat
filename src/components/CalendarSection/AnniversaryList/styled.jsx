import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 4px;
  background-color: #fde7de;

  & > h2 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 20px;
    padding-left: 4px;
    color: #7a7272;
  }
`;

export const Text = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
`;
