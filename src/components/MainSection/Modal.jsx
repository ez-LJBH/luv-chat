import React, { useState } from 'react'
import * as Styled from "./modalStyled";
import { Add } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material'

const Modal = ({open, close, inputValue, setInputValue, inputTitle, setInputTitle}) => {
    const getInputTitle = (e) => {
        let newInputTitle = {...inputTitle};
        newInputTitle[e.target.name] = e.target.value;
        setInputTitle(newInputTitle);
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
                                value={inputValue}
                                onChange={(e) => handleChange(e)}
                            />
                        </Styled.ProfileCategoryTitle>
                        {inputValue && <Input
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
                    <img src="images/main/profile_me.jpg" alt="profile img" />
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                        </Styled.ProfileCategoryTitle>
                        <Input
                            name="name"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            />
                    </Styled.ProfileCategoryBox>
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                        </Styled.ProfileCategoryTitle>
                        <Input
                            name="birth"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            />
                    </Styled.ProfileCategoryBox>
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                        </Styled.ProfileCategoryTitle>
                        <Input
                            name="like"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            />
                    </Styled.ProfileCategoryBox>
                    <Styled.ProfileCategoryBox>
                        <Styled.ProfileCategoryTitle>
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
                        </Styled.ProfileCategoryTitle>
                        <Input
                            name="dislike"
                            sx={{
                                width:'98%',
                                marginLeft:'7px',
                                fontFamily:"'Gowun Dodum', sans-serif"
                            }}
                            onChange={e=>handleChange(e)}
                            />
                    </Styled.ProfileCategoryBox>
                </Styled.ModalBody>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal