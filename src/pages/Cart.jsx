import styled from "styled-components"
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { Add, Remove } from "@mui/icons-material";
import {mobile} from "../responsive";


const Container=styled.div`


`;

const Wrapper=styled.div`
padding:20px;
${mobile({padding:"10px"})}

`;

const Title=styled.h1`
font-weight:300; 
text-align:center;

`;

const Top=styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding:20px;
${mobile({flexDirection:"column"})}




`;

const TopBotton=styled.button`
font-weight:600; 
padding:10px;
cursor:pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "black": "transparent"};
color:${props=>props.type === "filled" && "white"};
${mobile({margin:"10px 0px"})}

`;
const Bottom=styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`;

const Info=styled.div`
flex:3;
`;
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
paddong:20px;
height:50vh;
`;

const SummaryTitle=styled.h1`
font-weight:200;
`;

const SummaryItem=styled.div`
margin:30px 15px;
display:flex;
justify-content: space-between;
font-weight:${props=>props.type === "total" && "600"};
font-size:${props=>props.type === "total" && "24px"};
`;
const SummaryItemText=styled.span`

`;
const SummaryItemPrice=styled.span`

`;

const SummaryBotton=styled.button `
width:100%;
padding:10px;
color:white;
background-color:black;
font-weight:600;
`;


const Product=styled.div`
display:flex;
justify-content: space-between;
margin-bottom:30px;
margin-top:30px;
${mobile({flexDirection:"column"})}
`;
const ProductDetails=styled.div`
flex:2;
display:flex;
`;
const Image=styled.img`
width:200px


`;
const Details=styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;
padding:20px;
`;
const ProductName=styled.span`

`;
const ProductId=styled.span`

`;
const ProductColor=styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:${props=>props.color}

`;
const ProductSize=styled.span`

`;

const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;
`;
const PriceDetails=styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;

`;
const ProductAmountContiner=styled.div`
display:flex;
align-items: center;
margin-bottom:20px;
`;

const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`;

const ProductPrice=styled.div`
font-size:30px;
font-weight:200; 
${mobile({marginBottom:"15px"})}
`;


const TopTexts=styled.div`



`;
const TopText=styled.span`
cursor:pointer;
text-decoration:underline;
margin:0px 10px;
${mobile({margin:"5px 5px"})}

`;
export const Cart = () => {
  return (
    <Container>
          <Navbar/>
        <Announcement/>
       <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopBotton>CONTINUE SHOPPING</TopBotton>
            <TopTexts>
                <TopText>
                 Shopping Bag(2)
                </TopText>

                <TopText>
                 Your Wishlist(0)
                </TopText>
            </TopTexts>
            <TopBotton type="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src='https://m.media-amazon.com/images/I/41vgCVgPj+L._AC_.jpg'/>
                        <Details style={{textAlign:"start"}}>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductId ><b>ID:</b>76545678765</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37</ProductSize>
                            
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                       <ProductAmountContiner>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                       </ProductAmountContiner>
                       <ProductPrice>$50</ProductPrice>
                    </PriceDetails>
                </Product>

              <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src='data:image/jpeg;base64,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'/>
                        <Details style={{textAlign:"start"}}>
                            <ProductName><b>Product:</b>HAKURA T-SHIRT</ProductName>
                            <ProductId ><b>ID:</b>7654568765567</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                            
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                       <ProductAmountContiner>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                       </ProductAmountContiner>
                       <ProductPrice>$20</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$-5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryBotton>CHECKOUT NOW</SummaryBotton>
            </Summary>
        </Bottom>
       </Wrapper>
        <Footer/>
    </Container>
  )
}
