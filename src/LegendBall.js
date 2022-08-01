import styled from "styled-components"

export default function LegendBall({cor, borda}){
    return(
        <Container cor={cor} borda={borda}>
        </Container>
    )
}

const Container = styled.div`
    width: 25px;
    height: 25px;
    left: 78px;
    top: 377px;
    background: ${props => props.cor};
    border: 1px solid ${props =>props.borda};
    border-radius: 17px;

`