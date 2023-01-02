import styled from "styled-components"
import {mobile} from "../responsive";
const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items: center;
justify-content: center;
background:linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
) ,
url("https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg") center;
background-size : cover;
${mobile({height:"70vh"})}

`;


const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({width:"75%"})}
`;
const Title=styled.h1`
font-size:23px;
font-wight:300;
`;
const Form=styled.form`
display:flex;
flex-direction:column;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin: 10px 0px ;
padding:10px;
`;

const Butto=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Link= styled.a`
margin: 5px 0px ;
font-size:12px;
cursor:pointer;
text-decoration:underline; 

`;
export const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form> 
           <Input placeholder='UserName'  />
            <Input placeholder='Password'  />
            <Butto>LOGIN</Butto>
            <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
            <Link>CREAT A NEW ACCOUNT </Link>
        </Form>
    </Wrapper>
</Container>
  )
}
