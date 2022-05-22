import React, { useState } from 'react'
import * as Styled from "./modalStyled";
import { Add } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material'

const Modal = ({open, close}) => {
    const [inputCategoryValue, setInputCategoryValue] = useState('');

    const createInput = (e) => {
        return(
            <Input 
                    type="text"
                    name="addInput"
                    sx={{
                        border:'none',
                        background:'#fff',
                        fontFamily:"'Gowun Dodum', sans-serif",
                        width:'100%'
                    }}
                    />
        )
        e.preventDefault();
    }

    const changeInputTitleValue = (e) => {
        setInputCategoryValue(e.target.value)
    }

  return (
    <div className={open ? 'openModal modal' : "modal"}>
        {open ? (
            <Styled.Popup>
                <Styled.ModalHeader>프로필 수정</Styled.ModalHeader>
                <Styled.ModalBody>
                    <img src="images/main/profile_me.jpg" alt="profile img" />
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInput(e)}>
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
                                onChange={(e) => changeInputTitleValue(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        <Input value={inputCategoryValue}
                               sx={{
                                   width:'100%',
                                   margin:'0 auto',
                                   fontFamily:"'Gowun Dodum', sans-serif"
                                }} />
                    </Styled.ProfileCategoryBox>
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInput(e)}>
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
                                onChange={(e) => changeInputTitleValue(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        <Input value={inputCategoryValue}
                               sx={{
                                   width:'100%',
                                   margin:'0 auto',
                                   fontFamily:"'Gowun Dodum', sans-serif"
                                }} />
                    </Styled.ProfileCategoryBox>
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
                            <IconButton sx={{padding:'0 4px'}} onClick={(e)=>createInput(e)}>
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
                                onChange={(e) => changeInputTitleValue(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        {/* <Input value={inputCategoryValue}
                               sx={{
                                   width:'100%',
                                   margin:'0 auto',
                                   fontFamily:"'Gowun Dodum', sans-serif"
                                }} /> */}
                    </Styled.ProfileCategoryBox>
                </Styled.ModalBody>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal