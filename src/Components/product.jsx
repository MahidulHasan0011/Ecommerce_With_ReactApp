import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease;
cursor:pointer;
`;
const Container=styled.div`
flex:1;
margin:5px;
max-width:280px;
height:350px;
display:flex;
align-items: center;
justify-content: center;
background-color:#f5fbfb;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`;
const Circle=styled.div`
width:200px;
height:200px;
border-radius: 50%;
background-color:White;
position:absolute;

`;
const Image=styled.img`
height:75%;
z-index:2;
`;

const icon=styled.div`
width:40px;
height:40px;
border-radius: 50%;
background-color:white;
display:flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1); 
}
`
export const Product = ({items}) => {
  return (
    <Link to= "/ProductDetails">
    <Container >
     
      <Circle/>
      <Image src={items.img}/>
      <Info>
        <icon>
         <ShoppingCartOutlined/>
        </icon>
        <icon>
        <SearchOutlined/>
        </icon>
        <icon>
        <FavoriteBorderOutlined/>
        </icon>
      </Info>
     
    </Container>
    </Link>
  )
}
