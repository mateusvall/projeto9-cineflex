import {BrowserRouter, Routes, Route} from "react-router-dom"
import Tela1 from "./Tela1"
import Session from "./Session"
import Seat from "./Seat"
import { useState } from "react";
import Sucesso from "./Sucesso";



export default function App(){

    const [assentos, setAssentos] = useState([]);
    const [filme, setFilme] = useState("");
    const [sessao, setSessao] = useState("");
    const [weekday, setWeekday] = useState("")


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tela1/>}/>
                <Route path="/filme/:idFilme" element={<Session setFilme={setFilme}/>}/>
                <Route path="/sessao/:idSessao" element={<Seat assentos={assentos} setSessao={setSessao} weekday={weekday} setWeekday={setWeekday}/>}/>
                <Route path="/sucesso" element={<Sucesso filme={filme} sessao={sessao} weekday={weekday}/>}/>
            </Routes>
        </BrowserRouter>
    
        
    )
}

