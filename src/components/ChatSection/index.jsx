import { type } from "@testing-library/user-event/dist/type";
import * as Styled from "./styled";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";


const ChatSection = () => {

//  const [ Main ] = (onClick) => {
//     <Main />
//  }


  return (
  <Styled.Container >
      {/* 탑바 */}
      <Styled.Topbar>
      <Styled.TopFrofileMe />
        <Styled.HeartImg>
        <img src="images/main/pixel_heart.png" alt="pixel heart image" />
        </Styled.HeartImg>
      <Styled.TopFrofileYou />
      
      <Styled.MenuBtn>
          <IconButton
          // onClick={ <Main />}
          aria-label="menu"
          size="large"
          variant="contained">
          <MenuIcon />
          </IconButton>
      </Styled.MenuBtn>
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