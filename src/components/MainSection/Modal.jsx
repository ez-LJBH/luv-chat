import React, { useState } from 'react'
import * as Styled from "./modalStyled";
import { Add } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material'

const Modal = ({open, close, setInputVal}) => {
    const [inputCategoryValue, setInputCategoryValue] = useState('');

    const getInputValue = (e) => {
        setInputVal(e.target.value);
        console.log(e.target.value);
    }
    

    const createInputBox = (e) => {
        //새 input 만들기
        return(
        <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                                value={inputCategoryValue}
                                onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        {inputCategoryValue && <Input
                                                    sx={{
                                                        width:'98%',
                                                        marginLeft:'7px',
                                                        fontFamily:"'Gowun Dodum', sans-serif"
                                                    }} />
                        }
                    </Styled.ProfileCategoryBox>
        )
    }

    const handleChange = (e) => {
        setInputCategoryValue(e.target.value);
    }

  return (
    <div className={open ? 'openModal modal' : "modal"}>
        {open ? (
            <Styled.Popup id="profileEditForm">
                <Styled.ModalHeader>
                    <h4>프로필 수정</h4>
                    <button type="submit" form="profileEditForm">저장</button>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <img src="images/main/profile_me.jpg" alt="profile img" />
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                                value={inputCategoryValue}
                                onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        {inputCategoryValue && <Input
                                                    sx={{
                                                        width:'98%',
                                                        marginLeft:'7px',
                                                        fontFamily:"'Gowun Dodum', sans-serif"
                                                    }}
                                                    onChange={e=>getInputValue(e)}
                                                    />
                        }
                    </Styled.ProfileCategoryBox>
                </Styled.ModalBody>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal