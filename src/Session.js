import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import Name2 from "./Name2";
import HorariosArea from "./HorariosArea";
import BottomBar from "./BottomBar";




export default function Session({setFilme, setWeekday}){
    const params = useParams();
    const [session, setSession] = useState({});
    console.log(session);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);

        request.then((res) => {
            setSession(res.data)
        });
    
    },[])
   
    

    return (
        <React.Fragment>
            <TopBar/>
            <Name2/>
           {session.days && <HorariosArea days={session.days}/>}
           {session.days && <BottomBar image={session.posterURL} title={session.title}/>}
        </React.Fragment>
    )

}
