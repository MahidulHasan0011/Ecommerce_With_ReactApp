import styled from 'styled-components'
import{PopularProduct}from "../data"
import{Product}from"../Components/product"
import {mobile} from "../responsive";
const Container=styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;

// justify-content: space-between;
${mobile({display:"flex%",alignItems:"center",justifyContent:"center",overflow:"hidden"})}
`;
export const Products = () => {
  return (
    <Container>{PopularProduct.map(item=>(<Product items={item} key={item.id}/>))}</Container>
  )
}