import styled from 'styled-components'
const Container=styled.div`
height:30px;
 background-color:teal;
 color:white;
 font-size:14px;
 font-wight:500;
 display:flex;
 align-items: center;
 justify-content: center;

`

export const Announcement = () => {
  return (
    <Container>Super Deal!Free Shipping on orders over $50.

    </Container>
  )
}
