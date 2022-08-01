import styled from "styled-components"

export default function TopBar(){
    return(
        <Container>
            <h1>CINEFLEX</h1>
        </Container>
    )
}

const Container = styled.div`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center; 

    h1{
        color: #E8833A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;

    }
`

