import styled from "@emotion/styled";

import { colors } from "../styles";
const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  margin: 0 9.375rem;
  height: 10vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  margin: 4.375rem 9.375rem;
  justify-content: space-between;
  align-content: center;
  height: 90vh;
`;

const Header = () => {
  return(
    <Wrapper>
      <h1>Tittle</h1>
      
    </Wrapper>
  )
}

export const HomePage = ()=>{
  return(
    <>
<Header/>
    <Container>
    
      <p>
        Index
      </p>
    </Container>
    </>
  )
}