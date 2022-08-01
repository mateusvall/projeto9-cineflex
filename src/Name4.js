import styled from "styled-components"

export default function Name4(){
    return(
        <Container>
            <h1>Pedido feito com sucesso!</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 180px;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`