import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container=styled.div`
height:70px;
${mobile({height:"50px"})}
`;
const Wrapper=styled.div`
padding:20px 20px;
display: flex;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`;

const SearchContainer=styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input=styled.input`
border: none;
${mobile({width:"70px"})}

`;
const Left=styled.div`
width:33.3%;
text-align:center;
${mobile({width:"20.3%"})}
`;
const Logo=styled.h1`
font-wight:bolder;
${mobile({fontSize:"20px"})}
`
const Center=styled.div`
width:33.3%;
display: flex;
align-items: center;
`;
const Right=styled.div`
width:33.3%;
display: flex;
align-items: center;
justify-content: center;

`;
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
padding-right:19px;
${mobile({fontSize:"10px",paddingRight:"10px"})}
`
export const Navbar = () => {
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <Logo>MHI.</Logo>
        </Left>
        <Center>
        
          <SearchContainer>

            <Input  placeholder='Search'/>
            <Search style={{color:"gray", fontSize:16}}/>
          
          </SearchContainer>
          </Center>
        <Right>
          <MenuItem>
          <Link to= "/register">
          Sign Up
          </Link>
       
          </MenuItem>
          <MenuItem>
           <Link to= "/login">
           Sign In
          </Link>
         
          </MenuItem>
          <MenuItem>
          <Link to= "/cart">
          <Badge badgeContent={4} color="primary">
          
            <ShoppingBagOutlined/>
 
         </Badge>
         </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    
      </Container>
  )
}
