import React from "react";
import Horario from "./Horario";

export default function Horarios({weekday, date, showtimes}){
    return(
        <React.Fragment>
            <h1>{weekday} - {date}</h1>
        </React.Fragment>
    )
}