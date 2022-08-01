import styled from "styled-components"

export default function LegendText({texto}){
    return(
        <Container>
            {texto}
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #4E5A65
`