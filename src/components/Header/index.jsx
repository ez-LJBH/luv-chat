import * as Styled from "./styled";

import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

const Header = ({ isDrawable }) => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    isDrawable && (
      <Styled.Wrapper>
        <Styled.Logo onClick={goHome}>
          <img src="images/main/heart.png" alt="heart" />
        </Styled.Logo>
      </Styled.Wrapper>
    )
  );
};

export default Header;
