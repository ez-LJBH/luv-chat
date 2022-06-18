import * as Styled from "./styled";

import React from "react";

export default function ChatList({ chatList }) {
  return (
    <Styled.Container>
      {chatList.map((chat, index) => (
        <Styled.Chat key={index}>
          <Styled.ChatContainer
            style={{
              justifyContent: chat.sender === 2 ? "left" : "right",
            }}
          >
            <Styled.ChatContent>{chat.content}</Styled.ChatContent>
          </Styled.ChatContainer>
        </Styled.Chat>
      ))}
    </Styled.Container>
  );
}
