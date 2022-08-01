import styled from "styled-components"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TopBar from "./TopBar"
import Name from "./Name"
import MovieArea from "./MovieArea"



export default function App(){
    return(
        <BrowserRouter>
            <Container>
                <TopBar/>
                <Name/>
                <Routes>
                    <Route path="/" element={<MovieArea/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    
        
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

