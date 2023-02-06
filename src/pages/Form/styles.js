import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #312e81;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  label {
    font-size: 20px;
    color: white;
    margin-left: -430px;
    :nth-child(8) {
      margin-left: -399px;
    }
    :nth-child(2) {
        margin-left: -370px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 52px;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

export const Input = styled.input`
  height: 56px;
  width: 500px;
  border-radius: 10px;
  background-color: #a5b4fc;
  margin-bottom: 30px;
  border: 1px solid #312e81;
  font-size: 24px;
  text-align: center;
  color: white;
`;

export const TextArea = styled.textarea`
  height: 165px;
  width: 500px;
  background-color: #a5b4fc;
  border: 1px solid #312e81;
  border-radius: 10px;
  margin-bottom: 66px;
  padding: 10px;
  color: white;
  font-size: 24px;
`;

export const Button = styled.button`
  height: 40px;
  width: 340px;
  background-color: #312e81;
  border: 1px solid white;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;
  &:hover {
    background-color: #4338ca;
    cursor: pointer;
  }
`;

export const Home = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    transition: all ease 0.5s;
    &:hover {
      color: #a5b4fc;
    }
  }
`;