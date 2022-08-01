import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Name3 from "./Name3";
import { useParams } from "react-router-dom";
import axios from "axios";
import BallList from "./BallList";
import Legend from "./Legend";

export default function Seat(){

    const params = useParams();
    const [seat, setSeat] = useState({})

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

        request.then((res) => {
            setSeat(res.data);
        });
    
    },[])

    return(
        <React.Fragment>
            <TopBar/>
            <Name3/>
            {seat.seats && <BallList seats={seat.seats}/>}
            <Legend/>
        </React.Fragment>
    )
}