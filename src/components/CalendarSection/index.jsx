import React, { useState } from "react";
import dayjs from "dayjs";

import * as Styled from "./styled";
import Header from "./Header";
import CalendarList from "./CalendarList";
import AnniversaryList from "./AnniversaryList";

export default function CalendarSection() {
  const [currYear, setCurrYear] = useState(dayjs(new Date()).get("year"));

  return (
    <Styled.Wrapper>
      <Styled.Flex>
        <div>
          <Header currYear={currYear} setCurrYear={setCurrYear} />
          <CalendarList currYear={currYear} />
        </div>
        <div>
          <AnniversaryList currYear={currYear} />
        </div>
      </Styled.Flex>
    </Styled.Wrapper>
  );
}
