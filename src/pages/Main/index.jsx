import React from "react";
import * as Styled from "./styled";
import { FiCamera } from 'react-icons/fi';

const Main = () => {
  const loveDate = new Date('2022-05-04');
  const loveYear = loveDate.getFullYear();
  const loveMonth = loveDate.getMonth();
  const loveDay = loveDate.getDate();

  const nowDate = new Date();

  const passedTime = nowDate.getTime() - loveDate.getTime();
  const passedDay = Math.round(passedTime/(24*60*60*1000));
  return (
  <Styled.Wrapper>
    <Styled.MainTop>
        <Styled.LoveDate>
          <p>우리 사랑</p>
          <p>{loveYear}.{loveMonth}.{loveDay}부터</p>
          <p>{passedDay}일♥</p>
        </Styled.LoveDate>

        <Styled.MainImg>
          <img src="images/main_img.jpg" alt="main" />
        </Styled.MainImg>
    </Styled.MainTop>

    <Styled.Profile>
      <div className="me">My profile
        <div className="meImg">
          <img src="" alt="" />
          <FiCamera />
        </div>
        <div className="profileText"></div>
      </div>
      <div className="heartImg">
        하트이미지
      </div>
      <div className="you">Your Profile
        <div className="youImg">
          <img src="" alt="" />
          <FiCamera />
        </div>
        <div className="profileText"></div>
      </div>
    </Styled.Profile>
  </Styled.Wrapper>
  );
};

export default Main;
