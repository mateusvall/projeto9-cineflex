import styled from "styled-components"
import Ball from "./Ball"

export default function BallList({seats, assentos}){
    return(
        <Container>
            {seats.map((item) => <Ball name={item.name} isAvailable={item.isAvailable} assentos={assentos}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`