import React from "react";
import Calendar from "react-calendar";

import * as Styled from "./styled";

const arr = new Array(12).fill("");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CalendarList({ currYear }) {
  return (
    <Styled.Container>
      {arr.map((value, index) => (
        <div key={index}>
          <div>
            <h4>{index + 1}</h4>
            <p>{months[index]}</p>
          </div>
          <Calendar
            showNavigation={false}
            activeStartDate={new Date(currYear, index, 1)}
          />
        </div>
      ))}
    </Styled.Container>
  );
}
