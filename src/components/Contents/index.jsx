import * as Styled from "./styled";

import React from "react";

const Contents = ({ children, isDrawable }) => {
  return isDrawable ? (
    <Styled.Wrapper>{children}</Styled.Wrapper>
  ) : (
    <>{children}</>
  );
};

export default Contents;
