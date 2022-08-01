import styled from "styled-components"
import Ball from "./Ball"

export default function BallList({seats}){
    return(
        <Container>
            {seats.map((item) => <Ball name={item.name} isAvailable={item.isAvailable}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`