import React from "react";
import styled from "styled-components";
import MovieArea from "./MovieArea";
import Name from "./Name"
import TopBar from "./TopBar";

export default function Tela1(){
    return(
        <Container>
            <TopBar/>
            <Name/>
            <MovieArea/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

