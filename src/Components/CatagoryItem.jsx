import styled from 'styled-components'
import {mobile} from "../responsive";

const Container=styled.div`
flex:1;
margin:3px
height:70vh;
position:relative;

`;
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
 ${mobile({height:"30vh"})}
`;
const Info=styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;
const Title=styled.h1`
color:white;
margin-bottom:20px`;
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-wight:600; `;


export const CatagoryItem = ({items}) => {
  return (
    <Container >
      <Image src={items.img}/>
      <Info>
        <Title>
          {items.title}
        </Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
