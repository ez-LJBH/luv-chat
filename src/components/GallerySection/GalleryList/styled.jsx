import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const GalleryItem = styled.div`
  width: calc(100% / 4 - 5px);
  /* height: 350px;  */
  margin-top: 20px;
  padding-left: 20px;

  & > div {
    width: 100%;
    height: 350px;
    & > img {
      width: 100%;
      height: 100%;
    }
    &:hover > img {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const ModalImg = styled.div``;
