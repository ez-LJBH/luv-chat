import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  background-color: #fb9ea4;
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  &:hover {
    cursor: pointer;
  }

  & > img {
    width: 40px;
    height: 40px;
  }
`;
