import { type } from "@testing-library/user-event/dist/type";
import * as Styled from "./styled";
// import { MenuIcon } from '@mui/material'
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const ChatSection = () => {

  return (
    <Styled.Container >
      {/* 탑바 */}
      <Styled.Topbar>
        <Styled.TopFrofileMe />
        <Styled.HeartImg>
        <img src="images/main/pixel_heart.png" alt="pixel heart image" />
        </Styled.HeartImg>
        {/* <ChatMenuBtn>
          <MenuIcon>
            <MenuOutlinedIcon />
          </MenuIcon>
        </ChatMenuBtn> */}
        <Styled.TopFrofileYou />
        
      </Styled.Topbar>

        {/* 하단바 */}
        <Styled.Rowbar>
        <Styled.chatBox>
        <Styled.chatText 
        maxLength={400} 
        autoFocus
        placeholder="채팅을 시작해보세요!"/>
        </Styled.chatBox>
        <Styled.send> send </Styled.send>
        </Styled.Rowbar>
    </Styled.Container >
    
  )
}

export default ChatSection