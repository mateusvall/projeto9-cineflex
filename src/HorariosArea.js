import styled from "styled-components"
import Horarios from "./Horarios"


export default function HorariosArea({days}){
    return(
        <Container>
            {days.map((item) => <Horarios weekday={item.weekday} date={item.date} showtimes={item.showtimes} />)}
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 150px;

`