import styled from "styled-components";

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
export const MainImg = styled.div`
    width:700px;
    height:300px;
    overflow:hidden;
    border-radius:10px;
    box-shadow:0 0 15px 0 rgba(0,0,0,.2);
    img{
        width:100%;
        object-fit:cover;
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
    box-shadow:0 0 15px 0 rgba(0,0,0,.2);
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
export const HeartImg = styled.div`
    margin:0 15px;
    img{
        width:80px;
    }
`