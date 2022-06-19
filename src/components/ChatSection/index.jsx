import * as Styled from "./styled";

import React, { useEffect, useRef, useState } from "react";

import AlbumList from "./AlbumList";
import ChatList from "./ChatList";
import Textarea from "./Textarea";
import axios from "axios";

const ChatSection = () => {
  const divRef = useRef();
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const data = await axios.get("/data/chat.json");
      setChatList(data.data);

      setTimeout(() => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }, 300);
    })();
  }, []);

  return (
    <Styled.Container>
      <Styled.FlexContainer>
        <Styled.ChatBox>
          <Styled.ChatContent ref={divRef}>
            <ChatList chatList={chatList} />
          </Styled.ChatContent>
          <Styled.ChatTextarea>
            <Textarea
              divRef={divRef}
              chatList={chatList}
              setChatList={setChatList}
            />
          </Styled.ChatTextarea>
        </Styled.ChatBox>
        <Styled.AlbumBox>
          <AlbumList />
        </Styled.AlbumBox>
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default ChatSection;
