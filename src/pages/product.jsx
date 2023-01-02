import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components"
import { Announcement } from "../Components/Announcement"
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar"
import { NewsLeter } from "../Components/NewsLeter";
import {mobile} from "../responsive";



const Container=styled.div``;
const Wrapper=styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column" ,marginBottom:"20px"})}
`;
const ImgContainer=styled.div`
flex:1;
`;
const Image=styled.img`
// width: 26%;
height: 68vh;
object-fit:cover;
${mobile({height:"40vh"})}
`;
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
`;
const Title=styled.h1`
font-weight:200;
`;
const Desc=styled.p`
margin:20px 0px
`;
const Price=styled.span`
font-weight:100;
font-size:40px;
`;


const FilterContiner=styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})}

`;
const Filter=styled.div`

display:flex;
align-items:center;
`;
const FilterTitle=styled.div`
font-weight:200;
font-size:20px;

`;
const FilterColor=styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;

`;
const FilterSize=styled.select`
margin-left:10px;
padding:5px

`;
const FilterSizeOption=styled.option`

`;
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}

`;
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;

`;
const Amount=styled.span`
height:30px;
width:30px;
border-radius:50%;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`;
const Button=styled.button`
border:2px solid teal;
padding:15px
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`;

export const Product = () => {
  return (
    <Container>
         <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://m.media-amazon.com/images/I/61nYk34isZL._AC_UL320_.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore minus, incidunt a doloribus alias debitis assumenda consequuntur consectetur. Ipsam sit rerum facilis ullam maiores aut molestias. Esse deserunt iusto dolores?</Desc>
                <Price>$30</Price>
                <FilterContiner>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContiner>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLeter/>
        <Footer/>
    </Container>
  )
}
