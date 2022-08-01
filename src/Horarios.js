import React from "react";
import styled from "styled-components";
import ListaHorarios from "./ListaHorarios";

export default function Horarios({weekday, date, showtimes}){
    return(
        <Container>
            <h1>{weekday} - {date}</h1>
            <ListaHorarios showtimes={showtimes}/>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 23px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 22px;
    }
`