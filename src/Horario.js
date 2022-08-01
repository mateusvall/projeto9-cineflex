import styled from "styled-components"

export default function Horario({name}){
    return(
        <Container>
            <h1>{name}</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 9px;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`