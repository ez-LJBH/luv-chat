import * as Styled from "./styled";

import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationItem = ({ children, page }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActivate, setIsActivate] = useState(false);

  const handleClick = useCallback(() => {
    navigate(page);
  }, [navigate, page]);

  useEffect(() => {
    // 페이지 이동 후 스크롤 최상단으로 이동 (x, y)
    window.scrollTo(0, 0);

    if (location.pathname === page) {
      setIsActivate(true);
    } else {
      setIsActivate(false);
    }
  }, [location.pathname, page]);

  return (
    <Styled.Wrapper isActivate={isActivate} onClick={handleClick}>
      {children}
    </Styled.Wrapper>
  );
};

export default NavigationItem;
