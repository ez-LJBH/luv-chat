import React, { useState } from "react";
import * as Styled from "./styled";
import { IconButton, Menu, MenuItem} from '@mui/material'
// import { MoreVertIcon } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MainSection = () => {
  /* Dday 설정 */
  const loveDate = new Date('2022-05-04');
  const loveYear = loveDate.getFullYear();
  const loveMonth = loveDate.getMonth()+1;
  const loveDay = loveDate.getDate();

  const nowDate = new Date();

  const KoreaTime = 9 * 60 * 60 * 1000;
  const passedTime = nowDate.getTime()  - loveDate.getTime() + KoreaTime;
  const passedDay = Math.round(passedTime/(24*60*60*1000));

  /* 프로필 수정 버튼 */
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
  <Styled.Wrapper>
    <Styled.MainTop>
        <Styled.LoveDate>
          <p>우리 사랑</p>
          <p>{loveYear}.{loveMonth}.{loveDay}부터</p>
          <p>{passedDay}일♥</p>
        </Styled.LoveDate>

        <Styled.MainImg>
          <img src="images/main/main_img.jpg" alt="main" />
        </Styled.MainImg>
    </Styled.MainTop>

    <Styled.Profile>
      <Styled.ProfileBox>
        <Styled.EditBtn>
          <IconButton
            size="medium"
            aria-label="profile edit button"
            aria-constrol="edit-btn"
            aria-hasopoup="true"
            onClick={handleMenu}
            >
              <MoreVertIcon />
          </IconButton>
          <Menu
              id="edit-btn"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical:'top',
                horiaontal:'right'
              }}
              keepMounted
              transformOrigin={{
                vertical:'top',
                horiaontal:'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
          </Menu>
        </Styled.EditBtn>

        <Styled.ProfileImg>
          <img src="images/main/meimg.jpg" alt="my profile image" />
        </Styled.ProfileImg>
        <Styled.ProfileText>
          <p>이름:</p>
          <p>생일:</p>
          <p>좋아하는거:</p>
          <p>싫어하는거:</p>
        </Styled.ProfileText>
      </Styled.ProfileBox>

      <Styled.HeartImg>
        <img src="images/main/pixel_heart.png" alt="pixel heart image" />
      </Styled.HeartImg>

      <Styled.ProfileBox>
        <Styled.EditBtn>
          <IconButton
            size="medium"
            aria-label="profile edit button"
            aria-constrol="edit-btn"
            aria-hasopoup="true"
            onClick={handleMenu}
            >
          <MoreVertIcon />
        </IconButton>
        <Menu
            id="edit-btn"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical:'top',
              horiaontal:'right'
            }}
            keepMounted
            transformOrigin={{
              vertical:'top',
              horiaontal:'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Menu>
        </Styled.EditBtn>
        <Styled.ProfileImg>
          <img src="images/main/youimg.jpg" alt="your profile image" />
        </Styled.ProfileImg>
        <Styled.ProfileText>
          <p>이름:</p>
          <p>생일:</p>
          <p>좋아하는거:</p>
          <p>싫어하는거:</p>
        </Styled.ProfileText>
      </Styled.ProfileBox>
    </Styled.Profile>
  </Styled.Wrapper>
  );
};

export default MainSection;
