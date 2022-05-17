import React from 'react'
import * as Styled from "./modalStyled";
import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material'

const Modal = ({open, close}) => {
  return (
    <div className={open ? 'openModal modal' : "modal"}>
        {open ? (
            <Styled.Popup>
                <header>프로필 수정
                        <IconButton>
                            <Add />
                        </IconButton>
                        <button onClick={close}>save</button>
                </header>
                <main>
                    <img src="" alt="" />
                    <p>이름</p>
                    <p>생일</p>
                    <p>좋아하는거</p>
                    <p>싫어하는거</p>
                </main>
            </Styled.Popup>
        ) : null}
    </div>
  )
}

export default Modal