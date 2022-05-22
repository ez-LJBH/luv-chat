import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  padding: 8px;
  background-color: #fbeaeb;
`;

export const TopProfileContainer = styled.div`
  height: 80px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopProfileMe = styled.div`
  background-image: url("images/main/me_img.jpg");
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const HeartImg = styled.div`
  & > img {
    width: 24px;
    height: 24px;
    margin: 0 8px;
  }
`;

export const TopProfileYou = styled.div`
  background-image: url("images/main/you_img.jpg");
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

// #FDE7DE
// #E3CBC8
// #FBEAEB
// #E3C8D7
// #FCDEFD
// #FB9EA4
// #7A7272
// #7A4D50
// #C7B9BA
// #AD9092
// #FAF9CF
// #CFEBFA
// #99A6AD
// #AD9092
// #FFFFFF
// #7FAD8A
// #E8FAED
