import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  border-radius: 20px;
  background-color: #eef2ff;
  border: 1px solid black;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
  transition: all ease 0.5s;
  &:hover{
    background-color: #e0e7ff;
  }
`;
export const Nome = styled.div`
  width: 300px;
  max-width: 200px;
  min-width:285px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color:black;
`;
export const Salario = styled.div`
  width: 200px;
  max-width: 100px;
  min-width: 190px;
  height: 40px;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color:black;
`;
export const Local = styled.div`
  width: 200px;
  max-width: 100px;
  min-width: 190px;
  height: 40px;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color:black;
`;
export const Descricao = styled.div`
  min-width: 450px;
  max-width: 1150px;
  height: 40px;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color:black;
  overflow: hidden;
  text-overflow: ellipsis ;
  white-space: nowrap;
`;