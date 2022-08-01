import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Name3 from "./Name3";
import { useParams } from "react-router-dom";
import axios from "axios";
import BallList from "./BallList";
import Legend from "./Legend";
import Forms from "./Forms";
import BottomBar from "./BottomBar";

export default function Seat({assentos, setSessao, weekday, setWeekday}){

    const params = useParams();
    const [seat, setSeat] = useState({})
    

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

        request.then((res) => {
            setSeat(res.data);
            setSessao(res.data.name);
            setWeekday(res.data.day.weekday);

        });
    
    },[])

    return(
        <React.Fragment>
            <TopBar/>
            <Name3/>
            {seat.seats && <BallList seats={seat.seats} assentos={assentos}/>}
            <Legend/>
            {seat.seats && <Forms assentos={assentos}/>}
            {seat.seats && <BottomBar image={seat.movie.posterURL} title={seat.movie.title} name={seat.name} weekday={weekday}/>}
        </React.Fragment>
    )
}