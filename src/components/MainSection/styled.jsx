import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
    font-family: 'Gowun Dodum', sans-serif;
    padding:30px;
`
export const MainTop = styledComponents.div`
    border:1px solid #000;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export const LoveDate = styledComponents.div`
    width:300px;
    height:300px;
    text-align:center;
`
export const MainImg = styledComponents.div`
    width:700px;
    height:300px;
    overflow:hidden;
    img{
        width:100%;
    }
`
export const Profile = styledComponents.div`
    width:100%;
    border:1px solid #000;
    margin-top:30px;
    display:flex;
    justify-content:center;
`