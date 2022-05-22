import * as Styled from "./styled";

import {
  BsFillCalendarDateFill,
  BsFillCameraFill,
  BsFillChatTextFill,
  BsFillHouseFill,
} from "react-icons/bs";

import NavigationItem from "./NavigationList/NavigationItem";
import NavigationList from "./NavigationList";
import React from "react";

const NavigationBar = () => {
  if (
    window.location.href.indexOf("login") > -1 ||
    window.location.href.indexOf("join") > -1
  ) {
    return <></>;
  }

  return (
    <Styled.Wrapper>
      <Styled.TopProfileContainer>
        <Styled.TopProfileMe />
        <Styled.HeartImg>
          <img src="images/main/pixel_heart.png" alt="heart" />
        </Styled.HeartImg>
        <Styled.TopProfileYou />
      </Styled.TopProfileContainer>
      <NavigationList>
        <NavigationItem page="/">
          <div>
            <BsFillHouseFill />
          </div>
          <div>Home</div>
        </NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem page="/calendar">
          <div>
            <BsFillCalendarDateFill />
          </div>
          <div>Calendar</div>
        </NavigationItem>
        <NavigationItem page="/gallery">
          <div>
            <BsFillCameraFill />
          </div>
          <div>Gallery</div>
        </NavigationItem>
        <NavigationItem page="/chat">
          <div>
            <BsFillChatTextFill />
          </div>
          <div>Chat</div>
        </NavigationItem>
      </NavigationList>
    </Styled.Wrapper>
  );
};

export default NavigationBar;
