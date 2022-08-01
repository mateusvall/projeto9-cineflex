import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Horarios from "./Horarios";


export default function Session(){
    const params = useParams();
    const [session, setSession] = useState({});
    console.log(session);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);

        request.then((res) => {
            setSession(res.data);
        });
    
    },[])
   
    

    return (
        <React.Fragment>
           {/* {session.days.map((item) => <Horarios weekday={item.weekday} date={item.date} showtimes={item.showtimes} />)} */}
           {session.days.maps((item) => <h1>{item.weekday}</h1>)}
        </React.Fragment>
    )

}
