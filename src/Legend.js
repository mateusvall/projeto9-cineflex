import styled from "styled-components"
import LegendBox from "./LegendBox"


export default function Legend(){
    return(
        <Container>
            <LegendBox cor="#8DD7CF" borda="#1AAE9E" texto="Selecionado"/>
            <LegendBox cor="#C3CFD9" borda="#7B8B99" texto="Disponível"/>
            <LegendBox cor="#FBE192" borda="#F7C52B" texto="Indisponível"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around
`