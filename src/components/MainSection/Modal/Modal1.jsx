import React, {useState, useRef} from 'react'
import * as Styled from "./modalStyled";
import { Add, FileUpload } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material'

const Modal = ({isOpen, close, profileImg, setProfileImg, inputValue, setInputValue, inputTitle, setInputTitle}) => {
    
    //input value를 받아서 state를 수정하고, submit했을 때 수정된 state를 index.jsx로 보내기 위함
    const [modalProfileData, setModalProfileData] = useState({...inputValue});
    const [modalInputTitle, setModalInputTitle] = useState({...inputTitle});

    /* 프로필 이미지 업로드 */
    const fileInput = useRef(null);
    const [previewProfileImg, setPreviewProfileImg] = useState(profileImg);
    const handlePriewProfileImg = (e) => {
        e.preventDefault();
        // console.log(e.target.files[0]);
        let newProfileData = {...modalProfileData};
        newProfileData.profile_img = e.target.files[0];
        setPreviewProfileImg({...newModalProfileData});

        //이미지 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setPreviewProfileImg(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    const createInputBox = (e) => {
        //새 input 만들기
        /*
        return(
        
        )*/
    }

    const handleInputTitle = (e) => {
        let newModalInputTitle = {...modalInputTitle};
        newModalInputTitle[e.target.name] = e.target.value;
        setModalInputTitle(newModalInputTitle);
    }
    
    let newModalProfileData = modalProfileData;
    const handleInputValue = (e) => {
        newModalProfileData[0][e.target.name] = e.target.value;
        setModalProfileData({...newModalProfileData});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setProfileImg(previewProfileImg);
        setInputTitle({...modalInputTitle});
        setInputValue({...modalProfileData});
        close();
    }

  return (
    <div className={isOpen ? 'openModal modal' : "modal"}>
        {isOpen ? (
            <Styled.Popup id="profileEditForm" onSubmit={handleSubmit}>
                <Styled.ModalHeader>
                    <h4>프로필 수정</h4>
                    <button type="submit">저장</button>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <Styled.ProfileImgBox>
                        <img src={previewProfileImg} alt={modalProfileData[0].name} />
                        <IconButton onClick={()=>fileInput.current.click()}
                                    style={{
                                        background:'#fff',
                                        position:'absolute',
                                        bottom:'0px',
                                        right:'28%',
                                        border:'1px solid #ededed',
                                        boxShadow:'0 0 10px 0 rgba(0,0,0,.25)'
                                    }}>
                            <FileUpload />
                        </IconButton>
                        <input type="file" 
                               name="userimg" 
                               accept="image/*"
                               style={{display:'none'}} 
                               ref={fileInput}                               
                               onChange={handlePriewProfileImg} />
                    </Styled.ProfileImgBox>
                    
                    <Styled.ProfileInputBox>
                        <Styled.ProfileInputTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInputBox()}>
                                <Add />
                            </IconButton>
                            <Input 
                                type="text"
                                name="name"
                                sx={{
                                    border:'none',
                                    background:'#fff',
                                    fontFamily:"'Gowun Dodum', sans-serif",
                                    width:'90%'
                                }}
                                value={modalInputTitle.name}
                                onChange={(e) => handleInputTitle(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="name"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleInputValue(e)}
                            value={modalProfileData[0].name}
                            />
                    </Styled.ProfileInputBox>
                    <Styled.ProfileInputBox>
                        <Styled.ProfileInputTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInputBox()}>
                                <Add />
                            </IconButton>
                            <Input 
                                type="text"
                                name="birth"
                                sx={{
                                    border:'none',
                                    background:'#fff',
                                    fontFamily:"'Gowun Dodum', sans-serif",
                                    width:'90%'
                                }}
                                value={modalInputTitle.birth}
                                onChange={(e) => handleInputTitle(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="birth"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleInputValue(e)}
                            value={modalProfileData[0].birth}
                            />
                    </Styled.ProfileInputBox>
                    <Styled.ProfileInputBox>
                        <Styled.ProfileInputTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInputBox()}>
                                <Add />
                            </IconButton>
                            <Input 
                                type="text"
                                name="like"
                                sx={{
                                    border:'none',
                                    background:'#fff',
                                    fontFamily:"'Gowun Dodum', sans-serif",
                                    width:'90%'
                                }}
                                value={modalInputTitle.like}
                                onChange={(e) => handleInputTitle(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="like"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleInputValue(e)}
                            value={modalProfileData[0].like}
                            />
                    </Styled.ProfileInputBox>
                    <Styled.ProfileInputBox>
                        <Styled.ProfileInputTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInputBox()}>
                                <Add />
                            </IconButton>
                            <Input 
                                type="text"
                                name="dislike"
                                sx={{
                                    border:'none',
                                    background:'#fff',
                                    fontFamily:"'Gowun Dodum', sans-serif",
                                    width:'90%'
                                }}
                                value={modalInputTitle.dislike}
                                onChange={(e) => handleInputTitle(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="dislike"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleInputValue(e)}
                            value={modalProfileData[0].dislike}
                            />
                    </Styled.ProfileInputBox>
                </Styled.ModalBody>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal