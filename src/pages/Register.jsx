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
url("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-simple-business-e-commerce-web-page-image_20833.jpg")center;
background-size : cover;
${mobile({height:"80vh"})}

`;

const Wrapper=styled.div`
width:45%;
padding:20px;
background-color:white;
${mobile({width:"75%"})}
`;
const Title=styled.h1`
font-size:23px;
font-wight:300;
${mobile({fontSize:"15px"})}
`;
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px ;
padding:10px;
${mobile({margin:"15px 10px 0px 0px"})}
`;
const Agrement=styled.span`
font-size:12px;
margin:20px 0px;
${mobile({margin:" 10px 0px",fontSize:"8px"})}
`;
const Butto=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;

${mobile({padding:" 5px 10px",width:"100%"})}
`;


export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREAT AN ACCOUNT</Title>
            <Form>
                <Input placeholder='Your First Name'/>
                <Input placeholder='Your Last Name'/>
                <Input placeholder='UserName'  />
                <Input placeholder='Email'  />
                <Input placeholder='Password'  />
                <Input placeholder='Confirm Password'  />
                <Agrement>By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agrement>
                <Butto>CREATE</Butto>
            </Form>
        </Wrapper>
    </Container>
  )
}
