import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Forms({assentos}){

    const[comprador, setComprador] = useState("");
    const[cpf, setCpf] = useState("")

    function Comprar(event){
        event.preventDefault();

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",{
            ids: assentos,
            name: comprador,
            cpf: cpf
        })

    }

    return(
        <Container>
            <form onSubmit={Comprar}>
                <label for="comprador">Nome do comprador:</label>
                <input id="comprador" type="text" value={comprador} placeholder="Digite seu nome..." onChange={e => setComprador(e.target.value)} />
                <label for="cpf">CPF do comprador:</label>
                <input id="cpf" type="text" value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} />
                <Link to={`/sucesso`}><button type="submit">Reservar assento(s)</button></Link>
            </form>
        </Container>
    )
    
}

const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 100px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;

    label{
        margin-left: 24px
    }

    input{
        margin-left: 24px;
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
    }

    ::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }

    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        border: none;
        margin: 50px 70px;

    }


`