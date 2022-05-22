import styled from "styled-components";

export const Popup = styled.div`
    font-family: 'Gowun Dodum', sans-serif;
    width:350px;
    height:600px;
    position:absolute;
    top:calc(50% - 175px);
    left:calc(50% - 300px + 100px);
    background:#fff;
    box-shadow:0 0 20px rgba(0,0,0,.5);
    border-radius:10px;
    overflow-y:auto;
    padding-bottom:40px;
`
export const ModalHeader = styled.div`
    text-align:center;
    font-size:22px;
    margin:10px auto;
`
export const ModalBody = styled.div`
    
    img{
        border-radius:50%;
        display:block;
        margin:15px auto; 
    }
`
export const ProfileCategoryBox = styled.div`
    width:90%;
    margin:15px auto;
`
export const ProfileCategoryTitle = styled.div`
    display:flex;
    justify-content:flex-start;

`
export const ProfileInfo = styled.input`
    width:100%;
    margin:0 auto;
    font-family:'Gowun Dodum', sans-serif;
    border:none;
    background:#fff;
    font-size:16px;
`