import styled from "styled-components";

export const Container = styled.header`
    height: 100px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`

export const AddButton = styled.button`
    background-color: #4F46E5;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    font-size: 56px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    position: absolute;
    right: 50px;
    cursor: pointer;
    transition: all ease 0.5s;
    

    a{
        text-decoration: none;
        color: white;
    }

    &:hover{
        background-color:#6366f1;
    }
`