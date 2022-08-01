import styled from "styled-components"

export default function Name(){
    return(
        <Container>
            <h1>Selecione o Filme</h1>
        </Container>
    )
}

const Container = styled.div`
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    display: flex;
    align-items: center;
    justify-content: center;

`