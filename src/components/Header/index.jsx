import * as Styled from "./styled";

import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (
    window.location.href.indexOf("login") > -1 ||
    window.location.href.indexOf("join") > -1
  ) {
    return <></>;
  }

  return (
    <Styled.Wrapper>
      <Styled.Logo onClick={goHome}>
        <img src="images/main/heart.png" alt="heart" />
      </Styled.Logo>
    </Styled.Wrapper>
  );
};

export default Header;
