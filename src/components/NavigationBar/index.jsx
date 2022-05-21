import * as Styled from "./styled";

import {
  BsFillCalendarDateFill,
  BsFillCameraFill,
  BsFillChatTextFill,
  BsPersonCircle,
} from "react-icons/bs";

import NavigationItem from "./NavigationList/NavigationItem";
import NavigationList from "./NavigationList";
import Profile from "../Profile";
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
      <NavigationList>
        <NavigationItem page="/">
          <div>
            <BsPersonCircle />
          </div>
          <Profile />
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
