import React, { useEffect, useState } from "react";
import axios from "axios";

import * as Styled from "./styled";

export default function AnniversaryList({ currYear }) {
  const [anniversaryList, setAnniversaryList] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const data = await axios.get("/data/calendar.json");
      setAnniversaryList(data.data);
    })();
  }, []);

  return (
    <Styled.Container>
      <h2>{currYear}년도의 기념일</h2>
      {anniversaryList.map((anniversary, index) => {
        return (
          <Styled.Text key={index}>
            <div>{anniversary.title}</div>
            <div>{anniversary.date}</div>
          </Styled.Text>
        );
      })}
    </Styled.Container>
  );
}
