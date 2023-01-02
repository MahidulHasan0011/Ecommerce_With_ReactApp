import styled from 'styled-components'
import {mobile} from "../responsive";
import{catagoryDATA}from'../data'
import{CatagoryItem}from "../Components/CatagoryItem"
const Container=styled.div`
display:flex;
padding:20px;
 ${mobile({padding:"5px",flexDirection:"column"})}
`;

export const Catagory = () => {
  return (
    <Container>{catagoryDATA.map((item)=>(
        <CatagoryItem key={item.id} items={item}/>

        ))}</Container>
  )
}

