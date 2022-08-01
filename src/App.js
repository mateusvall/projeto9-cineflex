import {BrowserRouter, Routes, Route} from "react-router-dom"
import Tela1 from "./Tela1"
import Session from "./Session"



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tela1/>}/>
                <Route path="/filme/:idFilme" element={<Session/>}/>
            </Routes>
        </BrowserRouter>
    
        
    )
}

