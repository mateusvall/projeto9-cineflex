import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Name4 from "./Name4";
import TopBar from "./TopBar";

export default function Sucesso({filme, sessao, weekday}){
    return(
        <Container>
            <TopBar/>
            <Name4/>
            <h1>Filme e sessão</h1>
            <p>{filme}</p>
            <p>{weekday}</p>
            <p>{sessao}</p>
            <h1>Ingressos</h1>
            <h1>Comprador</h1>
            <Link to={"/"}>
            <button>Voltar para o home</button>
            </Link>

            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }

    button{
        margin-top: 40px;
        width: 225px;
        height: 42px;
        left: 74px;
        top: 622px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }

`