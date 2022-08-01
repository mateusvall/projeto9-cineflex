import styled from "styled-components"
import LegendBall from "./LegendBall"
import LegendText from "./LegendText"

export default function LegendBox({cor, borda, texto}){
    return(
        <Container>
            <LegendBall cor={cor} borda={borda}/>
            <LegendText texto={texto}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`