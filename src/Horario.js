import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Horario({name, sid}){
    return(
        
            <Container>
                <Link to={`/sessao/${sid}`}>
                    <h1>{name}</h1>  
                </Link>
            </Container>
       
    )
}

const Container = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    margin-right: 9px;
    position: relative;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        position: absolute;
        left: 18px;
        top: 10px;
    }

    a{
        text-decoration: none;
    }
`