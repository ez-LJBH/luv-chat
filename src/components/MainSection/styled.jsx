import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: 'Gowun Dodum', sans-serif;
    padding:30px;
`
export const MainTop = styled.div`
    border:1px solid #000;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export const LoveDate = styled.div`
    width:300px;
    height:300px;
    text-align:center;
`
export const MainImg = styled.div`
    width:700px;
    height:300px;
    overflow:hidden;
    img{
        width:100%;
    }
`
export const Profile = styled.div`
    width:100%;
    border:1px solid #000;
    margin-top:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const EditBtn = styled.div`
    text-align:right;
`
export const ProfileBox = styled.div`
    border:1px solid #000;
    width:250px;
    text-align:center;
    border-radius:8px;
    margin:15px 0;
    background:#fff;
`
export const ProfileImg = styled.div`
    img{
        width:150px;
        height:150px;
        border-radius:50%;
        margin-bottom:5px;
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
export const HeartImg = styled.div`
    margin:0 15px;
    img{
        width:80px;
    }
`