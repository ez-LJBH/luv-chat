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
