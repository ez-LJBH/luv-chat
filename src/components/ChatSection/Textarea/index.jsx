import * as Styled from "./styled";

import React, { useCallback } from "react";

import { useState } from "react";

const ENTER = 13;

export default function Textarea({ divRef, chatList, setChatList }) {
  const [data, setData] = useState("");

  const setChatData = useCallback((e) => {
    setData(e.target.value);
  }, []);

  const sendMessage = useCallback(
    (e) => {
      if (e.keyCode === ENTER) {
        e.preventDefault();
        setChatList([
          ...chatList,
          {
            id: chatList.length,
            sender: 1,
            receiver: 2,
            content: data,
            createdAt: "2022-05-08 09:00:00",
            readCount: 0,
          },
        ]);
        setData("");
        setTimeout(() => {
          const container = divRef.current;
          container.scrollTop = container.scrollHeight;
        }, 100);
      }
    },
    [chatList, data, divRef, setChatList]
  );

  return (
    <Styled.Container>
      <Styled.Textarea
        value={data}
        onChange={setChatData}
        onKeyDown={sendMessage}
      />
    </Styled.Container>
  );
}
