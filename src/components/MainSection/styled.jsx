import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
    font-family: 'Gowun Dodum', sans-serif;
    padding:30px;
    background:#fffcf6;
`
export const MainTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    align-items:center;
`
export const LoveDate = styled.div`
    width:300px;
    height:300px;
    text-align:center;
    border-radius:10px;
    background:#fff;
    box-shadow:0 0 15px 0 rgba(0,0,0,.2);
    font-size:20px;
    padding-top:3%;
    p{
        margin:0;
    }
    span{
        font-size:80px;
    }
`
export const fadein = keyframes`
    0% { opacity: 1 }
    100% { opacity:0.6 }
`
export const fadeinFast = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`
export const MainImg = styled.div`
    width:740px;
    height:300px;
    overflow:hidden;
    border-radius:10px;
    box-shadow:0 0 15px 0 rgba(0,0,0,.2);
    position:relative;
    &:hover{
        img{
            animation: ${fadein} 0.5s ease-in-out forwards;
        }
        button{
            display:block;
            animation: ${fadeinFast} 0.5s ease-in-out forwards;
        }
    }
    img{
        width:100%;
        object-fit:cover;
    }
    button{
        display:none;
        position:absolute;
        left:50%;
        top:130px;
        transform:translateX(-50%);
        background:#fb9ea4;
        color:#000;
        font-family: 'Gowun Dodum', sans-serif;
        font-size:16px;
        border-radius:40px;
    }
    button:hover{
        background:#fff;
        color:#333;
        display:block;
    }
`
export const Profile = styled.div`
    width:100%;
    margin-top:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fbeaeb;
    border-radius:10px;
    box-shadow:0 0 15px 0 rgba(0,0,0,.2);
`
export const EditBtn = styled.div`
    text-align:right;
`
export const ProfileBox = styled.div`
    width:250px;
    text-align:center;
    margin:15px 0;
    background:#fff;
    border-radius:8px;
    box-shadow:0 0 15px 0 rgba(0,0,0,.15);
`
export const ProfileImg = styled.div`
    img{
        border-radius: 50%;
        display: block;
        margin: 0 auto 5px;
        width:150px;
        height:150px;
        object-fit:cover;
    }
`
export  const ProfileText = styled.div`
    p{
        margin-top:0;
        margin-bottom:0.3em;
        &:nth-child(3){
            font-size:0.9em;
        }
        &:nth-child(4){
            font-size:0.9em;
            margin-bottom:1em;
        }
    }
`
export const floating = keyframes`
    0% { transform:translateY(0) }
    20% { transform:translateY(-3px) }
    40% { transform:translateY(0) }
    60% { transform:translateY(3px) }
`
export const HeartImg = styled.div`
    margin:0 15px;
    animation: ${floating} 2s infinite linear;
    img{
        width:80px;
        
    }
`
