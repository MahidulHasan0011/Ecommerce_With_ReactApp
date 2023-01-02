
import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import {mobile} from "../responsive";
const Container=styled.div`
display:flex;
align-items: center;
// justify-content: center;
height:60vh;
background-color:#fcf5f5;
flex-direction:column;
${mobile({height:"35vh"})}

`;
const Title=styled.h1`
font-size:70px;
margin-bottom:20px;
${mobile({fontSize:"40px"})}
`;
const Description=styled.div`
font-size:24px;
margin-bottom:20px;
font-wight:300;
${mobile({textAlign:"center",fontSize:"20px",paddingBottom:"20px"})}
`;
const InputFild=styled.div`


height:40px;
display:flex;
justify-content: center!important;
align-items: center!important;
background-color:white;
width:50%;
border:1px solid lightgray;

${mobile({width:"80%"})}
`;
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
padding: 7px;

`;


export const NewsLeter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get Timely Update From Your Favoriot Products</Description>
        <InputFild>
        <Input placeholder='Your Email' />
        <Button>
            <Send/>
        </Button>
        
        </InputFild>

    </Container>
  )
}
