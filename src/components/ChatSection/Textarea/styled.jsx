import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #dbbce4;
  resize: none;
  padding: 8px;

  &:focus-visible {
    outline: none;
  }
`;
