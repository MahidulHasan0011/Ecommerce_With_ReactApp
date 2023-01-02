import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import{SliderItem}from"../data";
import {mobile} from "../responsive";

const Container=styled.div`
height:100vh;
width:100%;
display:flex;
// margin:20px 0px;
overflow: hidden;
position:relative;
${mobile({height:"50vh"})}
`;
const Arrow=styled.div`
width:50px;
height:50px;
background-color:black;
color:white; 
border-radius: 50%;
display:flex;
align-items: center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction ==='left'&& '10px'};
right:${props=>props.direction ==='right'&& '10px'};
margin:auto;
opacity:0.5;
cursor:pointer;
z-index:2;

`;
const Wrapper=styled.div`
height:50%;
display:flex;
transform:translateX(${props=>props.slideerIndex*-100}vw);
transition:all 1.5s ease;
${mobile({height:"10%",  display:"flex"})}
`;
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items: center;
background-color:#${props=>props.bg};
${mobile({height:"50vh"})}

` ;
const ImageCont=styled.div`
height:100%;
display:flex;
align-items: center;
justify-content: center;
flex:1;
` ;
const Img=styled.img`
height:70%;
${mobile({height:"50%"})}
`;
const InfoCont=styled.div`
flex:1;
padding:50px;
${mobile({padding:"20px"})}
` ;
const Title=styled.h1`
font-size:70px;
${mobile({fontSize:"20px"})}
`;
const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-wight:500;
letter-spacing:3px;
${mobile({margin:"20px 0px",fontSize:"15px",fontWight:"400"})}
`;
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`

export const Slider = () => {
    const [ SlideerIndex,SetSlideerIndex]=useState(0)
    const handelClick= (direction)=>{
        if(direction ==="left"){
            SetSlideerIndex(SlideerIndex>0? SlideerIndex-1:3);
        }
        else{
            // SetSlideerIndex(SlideerIndex<0?SlideerIndex+1:0)
            SetSlideerIndex(SlideerIndex>0? SlideerIndex-1:3);
        }

    }
  return (
    <Container>
        <Arrow direction ="left" onClick={()=>handelClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper  slideerIndex={SlideerIndex} >
            { SliderItem.map((item)=>(

            < Slide bg={item.bg} key={item.id}>
            <ImageCont>
            <Img src={item.img} ></Img>
            </ImageCont>
            <InfoCont>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NOW</Button>
            </InfoCont>
            </Slide>
            ))}
        


            {/* <Slide bg=''>
            <ImageCont>
              <Img src="" ></Img>
           </ImageCont>
           <InfoCont>
            <Title></Title>
            <Desc></Desc>
            <Button>SHOW NOW</Button>
           </InfoCont>
            </Slide>


            <Slide bg=''>
            <ImageCont>
              <Img src="" ></Img>
           </ImageCont>
           <InfoCont>
            <Title></Title>
            <Desc></Desc>
            <Button>SHOW NOW</Button>
           </InfoCont>
            </Slide> */}
       
        </Wrapper>
        <Arrow direction ="right" onClick={()=>handelClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
      </Container>
  )
}
