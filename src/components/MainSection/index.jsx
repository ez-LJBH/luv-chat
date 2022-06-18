import * as Styled from "./styled";
import { IconButton, Menu, MenuItem, Input, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Modal1 from "./Modal/Modal1";
import Modal2 from "./Modal/Modal2";
import { MoreVert } from "@mui/icons-material";

const MainSection = () => {
  
  const [inputTitle, setInputTitle] = useState({
    name:'이름',
    birth:'생일',
    like:'좋아하는거',
    dislike:'싫어하는거'
  });


  /* Dday 설정 */
  const loveDate = new Date("2022-05-04");
  const loveYear = loveDate.getFullYear();
  const loveMonth = loveDate.getMonth() + 1;
  const loveDay = loveDate.getDate();

  const nowDate = new Date();

  const KoreaTime = 9 * 60 * 60 * 1000;
  const passedTime = nowDate.getTime() - loveDate.getTime() + KoreaTime;
  const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

  /* 메인 사진 편집 */
  const fileInput = useRef(null);
  const [mainImg, setMainImg] = useState('/images/main/main_img.jpg');
  const handleMainImg = (e) => {
    e.preventDefault();

    let newMainImg = mainImg;
    newMainImg = e.target.files[0];
    setMainImg({...newMainImg});

    //이미지 표시
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
            setMainImg(reader.result);
        }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  /* 프로필 수정 버튼 */
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleMenu1 = (e) => {
    setAnchorEl1(e.currentTarget);
  };
  const handleMenu2 = (e) => {
    setAnchorEl2(e.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  /* 프로필 수정 팝업창 상태 관리 */
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const openModal1 = () => {
    handleClose1();
    setIsOpen1(true);
  }
  const openModal2 = () => {
    handleClose2();
    setIsOpen2(true);
  }
  const closeModal1 = () => {
    setIsOpen1(false);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  /* Modal의 데이터 받기 */
  const [inputValue, setInputValue] = useState([
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

  const [profileImg1, setProfileImg1] = useState(inputValue[0].profile_img);
  const [profileImg2, setProfileImg2] = useState(inputValue[1].profile_img);

  return (
    <Styled.Wrapper>
      <Styled.MainTop>
        <Styled.LoveDate>
          <p>우리 사랑</p>
          <p>
            {loveYear}.{loveMonth}.{loveDay}부터
          </p>
          <p><span>{passedDay}</span>일♥</p>
        </Styled.LoveDate>

        <Styled.MainImg>
          <img src={mainImg} alt="main image" />
          <Button onClick={()=>fileInput.current.click()}>사진 편집</Button>
          <input type="file" 
                 name="userimg" 
                 accept="image/*"
                 style={{display:'none'}} 
                 ref={fileInput}                               
                 onChange={handleMainImg} />
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
              onClick={handleMenu1}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="edit-btn"
              anchorEl={anchorEl1}
              keepMounted
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
            >
              <MenuItem onClick={openModal1}>edit</MenuItem>
            </Menu>
          </Styled.EditBtn>

          <Styled.ProfileImg>
            <img src={profileImg1} alt={inputValue[0].name} />
          </Styled.ProfileImg>
          <Styled.ProfileText>
            <p>{inputTitle.name}:{inputValue[0].name}</p>
            <p>{inputTitle.birth}:{inputValue[0].birth}</p>
            <p>{inputTitle.like}:{inputValue[0].like}</p>
            <p>{inputTitle.dislike}:{inputValue[0].dislike}</p>
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
              onClick={handleMenu2}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="edit-btn"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
            >
              <MenuItem onClick={openModal2}>edit</MenuItem>
            </Menu>
          </Styled.EditBtn>
          <Styled.ProfileImg>
            <img src={profileImg2} alt={inputValue[1].name} />
          </Styled.ProfileImg>
          <Styled.ProfileText>
            <p>{inputTitle.name}:{inputValue[1].name}</p>
            <p>{inputTitle.birth}:{inputValue[1].birth}</p>
            <p>{inputTitle.like}:{inputValue[1].like}</p>
            <p>{inputTitle.dislike}:{inputValue[1].dislike}</p>
          </Styled.ProfileText>
        </Styled.ProfileBox>
      </Styled.Profile>
      
      <Modal1 isOpen={isOpen1}
             close={closeModal1}
             profileImg={profileImg1}
             setProfileImg={setProfileImg1}
             inputValue={inputValue} 
             setInputValue={setInputValue} 
             inputTitle={inputTitle} 
             setInputTitle={setInputTitle} />
      <Modal2 isOpen={isOpen2}
             close={closeModal2}
             profileImg={profileImg2}
             setProfileImg={setProfileImg2}
             inputValue={inputValue} 
             setInputValue={setInputValue} 
             inputTitle={inputTitle} 
             setInputTitle={setInputTitle} />
    </Styled.Wrapper>
  );
};

export default MainSection;
