import styled from "styled-components";
import axios from 'axios';
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function MovieArea(){

    const [movies, setMovies] = useState([])

    console.log(movies);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        requisicao.then(resposta =>{
            setMovies(resposta.data)
        })

    }, []);
    

  
    return(
        
        <Container>
            {movies.map((item, key) =>
                <Link key={key} to={`/filme/${item.id}`}>
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