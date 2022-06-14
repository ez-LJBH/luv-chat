import * as Styled from "./styled";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from "./Modal";
import { MoreVert } from "@mui/icons-material";

const MainSection = () => {
  const [inputTitle, setInputTitle] = useState({
    name:'이름',
    birth:'생일',
    like:'좋아하는거',
    dislike:'싫어하는거'
  });

  const [profileData, setProfileData] = useState([]);

  /* Dday 설정 */
  const loveDate = new Date("2022-05-04");
  const loveYear = loveDate.getFullYear();
  const loveMonth = loveDate.getMonth() + 1;
  const loveDay = loveDate.getDate();

  const nowDate = new Date();

  const KoreaTime = 9 * 60 * 60 * 1000;
  const passedTime = nowDate.getTime() - loveDate.getTime() + KoreaTime;
  const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

  // /* 프로필 데이터 */
  // useEffect(()=>{
  //   const getProfileData = async () => {
  //     const info = await axios.get('/data/modal.json')
  //     .then( res => setProfileData(...profileData, res.data) );
  //   }
  //   getProfileData();
  // }, []);
  // // console.log(profileData); //불러오기 전에 console이 먼저 찍혀서 undefined 출력됨

  /* axios 불러오는 속도 차이때문에 오류나는 것 같은데..
  let profileDataList = profileData.map( data => {
    // console.log(data);
    <div key={data.id}>
      <Styled.ProfileImg>
            <img src={data.profile_img} alt={data.name} />
          </Styled.ProfileImg>
          <Styled.ProfileText>
            <p>이름:{data.name}</p>
            <p>생일:{data.birth}</p>
            <p>좋아하는거:{data.like}</p>
            <p>싫어하는거:{data.dislike}</p>
          </Styled.ProfileText>
    </div>
  })
  */

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

  /* Modal의 데이터 받기 */
  const [inputValue, setInputValue] = useState([
    {
      name:'',
      birth:'',
      like:'',
      dislike:''
    },
    {
      name:'김사람',
      birth:'1990.01.01',
      like:'독서, 게임, 카페투어',
      dislike:'해산물, 여름',
      profile_img:'/images/main/profile_me.jpg'
    },
    {
      name:'이사람',
      birth:'1990.12.31',
      like:'게임, 요리',
      dislike:'먼지, 초콜릿',
      profile_img:'/images/main/profile_you.jpg'
    }
  ]);


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
            <p>이름:{inputValue[1].name}</p>
            <p>생일:{inputValue[1].birth}</p>
            <p>좋아하는거:{inputValue[1].like}</p>
            <p>싫어하는거:{inputValue[1].dislike}</p>
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
          <p>이름:{inputValue[2].name}</p>
            <p>생일:{inputValue[2].birth}</p>
            <p>좋아하는거:{inputValue[2].like}</p>
            <p>싫어하는거:{inputValue[2].dislike}</p>
          </Styled.ProfileText>
        </Styled.ProfileBox>
      </Styled.Profile>
      <Modal open={modal} close={closeModal} inputValue={inputValue} setInputValue={setInputValue} inputTitle={inputTitle} setInputTitle={setInputTitle} />
    </Styled.Wrapper>
  );
};

export default MainSection;
