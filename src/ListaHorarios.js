import styled from "styled-components"
import Horario from "./Horario"

export default function ListaHorarios({showtimes}){
    return(
        <Container>
            {showtimes.map((item) => <Horario name={item.name} sid={item.id}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin-bottom: 23px;
`