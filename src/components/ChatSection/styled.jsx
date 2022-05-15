import styled from "styled-components";
// import heart from "../../../public/images/main/heart.jpg";

export const Container =styled.div`
width: 100%;
height: 785px;
background: #f5c7e9;
`

export const Topbar = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
height: 80px;
background: #f5c7e9;
border: 2px solid #ddd;
border-radius: 5px;
`
export const TopFrofileMe = styled.div`
display: flex;
background-image: url("images/main/meimg.jpg");
width: 50px;
height: 50px;
margin-top: 10px;
margin-left: 30px;
border-radius: 50%;
`
// export const He = styled(heart).img;

export const TopFrofileYou = styled.div`
display: flex;
background-image: url("images/main/youimg.jpg");
width: 50px;
height: 50px;
width: 50px;
height: 50px;
margin-top: 10px;
margin-left: 50px;
border-radius: 50%;
`


export const Rowbar = styled.div`
display: flex;
justify-content: space-between;
background: #fe6fd9;
width: 100%;
height: 100%;

`

export const chatBox = styled.div`
margin-top: 720px;
margin-left: 280px;
width: 1250px;
height: 50px;
background: #fff;
border: 1px solid #fff;
border-radius: 10px;
`

export const send = styled.button`
margin-top: 720px;
margin-right: 60px;
width: 80px;
height: 50px;
border: 1px solid #fff;
background-color: yellow;
padding: 15px 15px;
border-radius: 5px;
`
export const chatText = styled.textarea`
border: 1px solid #fff;
border-radius: 5px;
width: 100%;
height: 100%;
text-align: center;
font-size: 15px;
`
