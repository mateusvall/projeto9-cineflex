import { useState } from "react";
import styled from "styled-components"



export default function Ball({name, isAvailable, assentos}){

    const [selected, setSelected] = useState(false);
    console.log(selected)

    function selectBall(){
        if(isAvailable){
            setSelected(!selected);
        }else{
            alert("Esse assento não está disponível")
        }
    }

    return(
        <Container available={isAvailable} selected={selected} onClick={()=> selectBall()}>
            {name}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: ${props => props.available? (props.selected? "#8DD7CF":"#C3CFD9"):"#FBE192"};
    border: 1px solid #808F9D;
    border-radius: 16px;
    margin-right: 7px;
    margin-bottom: 18px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
`
