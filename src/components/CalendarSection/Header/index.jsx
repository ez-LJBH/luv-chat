import dayjs from "dayjs";
import React from "react";
import { useCallback } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import * as Styled from "./styled";

export default function Header({ currYear, setCurrYear }) {
  const setYear = useCallback(
    (value) => {
      if (value !== -1 && value !== 1) {
        setCurrYear(value);
      } else {
        setCurrYear(currYear + value);
      }
    },
    [currYear, setCurrYear]
  );

  return (
    <Styled.Container>
      <h2>{currYear}</h2>
      <div>
        <div onClick={setYear.bind(null, -1)}>
          <BsChevronLeft
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </div>
        <div onClick={setYear.bind(null, 1)}>
          <BsChevronRight
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </div>
      </div>
      <div onClick={setYear.bind(null, dayjs(new Date()).get("year"))}>
        올해
      </div>
    </Styled.Container>
  );
}
