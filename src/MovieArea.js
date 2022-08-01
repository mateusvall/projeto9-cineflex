import styled from "styled-components";
import axios from 'axios';
import {Link} from "react-router-dom"
import { useState } from "react";
import Movie from "./Movie";

export default function MovieArea(){

    const [movies, setMovies] = useState([])

    const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

    requisicao.then(resposta =>{
        setMovies(resposta.data)
    })
    return(
        <Container>
            {movies.map(item =>
                <Link to={`/filme/${item.id}`}>
                    <Movie name={item.posterURL}/>
                </Link>
                )
            }
        </Container>
        
    )
}

const Container = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    
`