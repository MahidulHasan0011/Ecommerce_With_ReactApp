import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter, YouTube } from '@mui/icons-material';
import styled from 'styled-components';
import {mobile} from "../responsive"; 
import { Link } from 'react-router-dom';
const Container=styled.div`
display:flex;
${mobile({flexDirection:"column",height:"125vh"})}
`;
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${mobile({flex:"0"})}
`;
const Logo=styled.h1`
flex:1;
${mobile({height:"100px",flex:"0"})}
`;
const Desc=styled.p`
flex:1;
margin:20px 0px;
${mobile({flex:"0"})}
`;
const SocialCont=styled.div`
display:flex;
flex:1;
${mobile({flex:"0"})}
`;
const SocialIcon=styled.div`
// flex:1;
width:40px;
height:40px;
border-radius: 50%;
color:White;
background-color:#${props=>props.color};
display:flex;
align-items: center;
justify-content: center;
margin-right:20px;

`;
const Center=styled.div`
flex:1;
padding:20px;
${mobile({height:"200px" ,flex:"0"})}
`;
const Title=styled.h3`
margin-bottom:30px;
`;
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:grid;
grid-template-columns: auto auto;
flex-wrap:wrap


`;
const ListItem=styled.li`
width:100%;
margin-bottom:10px;
`;

const Right=styled.div`
flex:1;
padding:20px;
${mobile({height:"240px",flex:"0",backgroundColor:"lightgray" })}
`;
const ContuctItem=styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom:20px;

`;
const Payment=styled.img`
width:50%;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MHI.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus autem eveniet rerum repellendus, asperiores ut temporibus nesciunt unde, hic odio, placeat est incidunt iste nulla cum vitae natus sed!
            </Desc>
            <SocialCont>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon >
                <SocialIcon color="E4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <LinkedIn/>
                </SocialIcon>
                <SocialIcon color="3B5999"><YouTube/></SocialIcon>
            </SocialCont>
        </Left>


        <Center>
            <Title>Useful Links</Title>
            <List>
            <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/">
            <ListItem>Home</ListItem>
            </Link>
               
                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/cart">
                <ListItem>Cart</ListItem>
                </Link>
                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/allProduct">
                <ListItem>Man Fashion</ListItem>
                </Link>
                

                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/allProduct">
                <ListItem>Woman Fashion</ListItem>
                </Link>
                

                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/login">
                <ListItem>My Account</ListItem>
                </Link>
               

                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/cart">
                <ListItem>Order Tracking</ListItem>
                </Link>
               

                <Link style={{ textDecoration: "none",padding: "0px 10px"}} to= "/cart">
                <ListItem>Wishlist </ListItem>
                </Link>
                

            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContuctItem><Room style={{marginRight:"10px"}}/>26,Mirpur-2,Dhaka-Bangladesh</ContuctItem>
            <ContuctItem><Phone style={{marginRight:"10px"}}/>01892743098</ContuctItem>
            <ContuctItem><MailOutline style={{marginRight:"10px"}}/>mahidulhasaneashat169@gmail.com</ContuctItem>
            <Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtFIC-PRzF8y8vMaaUxjXKpU6AYqHDWsIZeiEuJYobiEqFJJ4iW2fkYyvSi3BzakCxA&usqp=CAU'/>
           
        </Right>
    </Container>
  )
}
