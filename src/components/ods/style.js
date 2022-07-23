import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`
export const SubContainer = styled.div`
    width: 100%;

    margin:5vh auto;

    display: flex;
    justify-content: space-evenly;
`

export const Img = styled.img`
    width: 15%;

    border-radius: 20px;
    border: 2px solid #fff;

    cursor: pointer;

    transition: 1s;

    &:hover{
        transform: scale(1.1);
    }
`