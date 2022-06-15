import React, {useState, useRef} from 'react'
import * as Styled from "./modalStyled";
import { Add, FileUpload } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material'

const Modal = ({open, close, inputValue, setInputValue, inputTitle, setInputTitle}) => {

    /* 프로필 이미지 업로드 */
    const [profileImg, setProfileImg] = useState(inputValue[1].profile_img);
    const fileInput = useRef(null);

    const saveprofileImg = (e) => {
        e.preventDefault();
        // console.log(e.target.files[0]);
        setProfileImg(e.target.files[0]);

        //이미지 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setProfileImg(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    // const getInputTitle = (e) => {
    //     let newInputTitle = {...inputTitle};
    //     newInputTitle[e.target.name] = e.target.value;
    //     setInputTitle(newInputTitle);
    // }
    

    const createInputBox = (e) => {
        //새 input 만들기
        /*
        return(
        <Styled.ProfileInputBox>
                        <Styled.ProfileInputTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInputBox()}>
                                <Add />
                            </IconButton>
                            <Input 
                                type="text"
                                name="addInput"
                                sx={{
                                    border:'none',
                                    background:'#fff',
                                    fontFamily:"'Gowun Dodum', sans-serif",
                                    width:'90%'
                                }}
                                value={inputValue}
                                onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileInputTitle>
                        {inputValue && <Input
                                                    sx={{
                                                        width:'98%',
                                                        marginLeft:'7px',
                                                        fontFamily:"'Gowun Dodum', sans-serif"
                                                    }} />
                        }
                    </Styled.ProfileInputBox>
        )*/
    }

    const handleChange = (e) => {
        let newInputValue = {...inputValue};
        newInputValue[e.target.name] = e.target.value;
        setInputValue(newInputValue);
        console.log(newInputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        close();
    }

  return (
    <div className={open ? 'openModal modal' : "modal"}>
        {open ? (
            <Styled.Popup id="profileEditForm" onSubmit={handleSubmit}>
                <Styled.ModalHeader>
                    <h4>프로필 수정</h4>
                    <button type="submit">저장</button>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <Styled.ProfileImgBox>
                        <img src={profileImg} alt={inputValue[1].name} />
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
                               onChange={saveprofileImg} />
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
                                value={inputTitle.name}
                                // onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="name"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            value={inputValue[1].name}
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
                                value={inputTitle.birth}
                                // onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="birth"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            value={inputValue[1].birth}
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
                                value={inputTitle.like}
                                // onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="like"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            value={inputValue[1].like}
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
                                value={inputTitle.dislike}
                                // onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileInputTitle>
                        <Input
                            name="dislike"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            value={inputValue[1].dislike}
                            />
                    </Styled.ProfileInputBox>
                </Styled.ModalBody>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal