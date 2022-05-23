import styled from "styled-components";

export const Popup = styled.form`
    font-family: 'Gowun Dodum', sans-serif;
    width:350px;
    height:600px;
    position:absolute;
    top:calc(50% - 175px);
    left:calc(70%);
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
    position:relative;
    h4{
        margin:10px auto;
        color:#333;
    }
    button{
        position:absolute;
        right:15px;
        top:5px;
        padding:3px 7px;
        font-size:14px;
        background:#7FAD8A;
        border:none;
        box-shadow:0 0 5px rgba(0,0,0,.3);
        border-radius:5px;
        font-family: 'Gowun Dodum', sans-serif;
        font-weight:700;
        color:#333;
        cursor:pointer;
    }
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
    width:100%;
`
export const ProfileInfo = styled.input`
    width:100%;
    margin:0 auto;
    font-family:'Gowun Dodum', sans-serif;
    border:none;
    background:#fff;
    font-size:16px;
`