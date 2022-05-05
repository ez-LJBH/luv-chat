import * as Styled from "./styled";

import React from "react";

const Header = () => {
  if (
    window.location.href.indexOf("login") > -1 ||
    window.location.href.indexOf("join") > -1
  ) {
    return <></>;
  }

  return <Styled.Wrapper>Header</Styled.Wrapper>;
};

export default Header;
