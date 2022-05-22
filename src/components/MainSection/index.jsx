import * as Styled from "./styled";

import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import Modal from "./Modal";
import { MoreVert } from "@mui/icons-material";

const MainSection = () => {
  /* Dday 설정 */
  const loveDate = new Date("2022-05-04");
  const loveYear = loveDate.getFullYear();
  const loveMonth = loveDate.getMonth() + 1;
  const loveDay = loveDate.getDate();

  const nowDate = new Date();

  const KoreaTime = 9 * 60 * 60 * 1000;
  const passedTime = nowDate.getTime() - loveDate.getTime() + KoreaTime;
  const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

  /* 프로필 사진 */


  /* 프로필 수정 버튼 */
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* 프로필 수정 팝업창 */
  const [modal, setModal] = useState(false);
  const openModal = () => {
    handleClose();
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.MainTop>
        <Styled.LoveDate>
          <p>우리 사랑</p>
          <p>
            {loveYear}.{loveMonth}.{loveDay}부터
          </p>
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
              aria-controls="edit-btn"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="edit-btn"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={openModal}>Edit</MenuItem>
            </Menu>
          </Styled.EditBtn>

          <Styled.ProfileImg>
            <img src="images/main/profile_me.jpg" alt="my profile" />
          </Styled.ProfileImg>
          <Styled.ProfileText>
            <p>이름:</p>
            <p>생일:</p>
            <p>좋아하는거:</p>
            <p>싫어하는거:</p>
          </Styled.ProfileText>
        </Styled.ProfileBox>

        <Styled.HeartImg>
          <img src="images/main/pixel_heart.png" alt="pixel heart" />
        </Styled.HeartImg>

        <Styled.ProfileBox>
          <Styled.EditBtn>
            <IconButton
              size="medium"
              aria-label="profile edit button"
              aria-controls="edit-btn"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="edit-btn"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={openModal}>Edit</MenuItem>
            </Menu>
          </Styled.EditBtn>
          <Styled.ProfileImg>
            <img src="images/main/profile_you.jpg" alt="your profile" />
          </Styled.ProfileImg>
          <Styled.ProfileText>
            <p>이름:</p>
            <p>생일:</p>
            <p>좋아하는거:</p>
            <p>싫어하는거:</p>
          </Styled.ProfileText>
        </Styled.ProfileBox>
      </Styled.Profile>
      <Modal open={modal} close={closeModal} />
    </Styled.Wrapper>
  );
};

export default MainSection;
