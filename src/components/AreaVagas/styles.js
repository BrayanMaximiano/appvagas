import styled from "styled-components";

export const Container = styled.section`
 background-color: #f3f3f3;
 width: 100%;
 height: fit-content;
 display: flex;
 flex-direction: column;
 margin-bottom: 20px;
`

export const Indice = styled.div`
    min-height: 40px;
    max-height: 40px;
    width: 100%;
    background-color: #818CF8;
    display: flex;
    border-bottom: 1px solid black;
    
`

export const IndexName = styled.div`
    height: 40px;
    width: 300px;
    display: flex;
    align-items:center ;
    padding: 0 10px;
 
`
export const IndexSalary = styled.div`
    height: 40px;
    width: 200px;
    border-left: 1px solid black;
    display: flex;
    align-items:center ;
    padding: 0 10px;
    
`
export const IndexLocal = styled.div`
    height: 40px;
    width: 200px;
    border-left: 1px solid black;
    display: flex;
    align-items:center ;
    padding: 0 10px;
    
`
export const IndexDesc = styled.div`
    height: 40px;
    min-width: 500px;
    border-left: 1px solid black;
    display: flex;
    align-items:center ;
    padding: 0 10px;
    
`

export const IndexLabel = styled.p`
    font-size: 1.3rem;
    color: white;
    font-weight: bolder;
`

export const VagasWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`