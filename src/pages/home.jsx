import styled from "@emotion/styled";

import { colors, fonts, typography } from "../styles";
const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  height: 15vh;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
`;

const Tittle = styled.span`
  margin: 0 9.375rem;
  font-family: ${fonts.secondary};
  ${typography.lg};
  color: ${colors.black.light};
  line-height: 1;
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
      <Tittle>HACKERS NEWS</Tittle>
      
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