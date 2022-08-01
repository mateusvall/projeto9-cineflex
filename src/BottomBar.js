import styled from "styled-components"

export default function BottomBar({image,title, weekday, name}){
    console.log(weekday)
    console.log(name)
    return(
        <Container>
            <img src={image}/>
            <h1>{title}</h1>
            {weekday}
            {name}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 117px;  
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    img{
        width: 48px;
        height: 72px;
        margin-left: 18px;
        margin-top: 23px;
    }

    h1{
        margin-left: 22px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
`