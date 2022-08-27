import styled from "@emotion/styled";
import { CardItem } from "../components/cards";
import icontimer from "../assets/icontimer.png";
//import Favorite from "../assets/heart_on.png";
import Unfavorite from "../assets/heart_off.png"
import { colors, fonts, typography } from "../styles";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  height: 15vh;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
`;

const Options = styled.span`
  ${typography.md}
  font-weight: 500;
  cursor: pointer;
  color: ${colors.gray.dark};
  font-weight: bold;
  border-radius: 2px;
  padding: 0.188rem 1rem;
  margin: 4.375rem 0;
`;

const Tittle = styled.span`
  margin: 0 9.375rem;
  font-family: ${fonts.secondary};
  ${typography.lg};
  color: ${colors.black.light};
  line-height: 1;
`;

const Container = styled.div`
  margin: 0 9.375rem;
  justify-content: space-between;
  align-content: center;
  height: 85vh;
`;


const Header = () => {
  return (
    <Wrapper>
      <Tittle>HACKERS NEWS</Tittle>
    </Wrapper>
  );
};

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Header />
      <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
            <Options
              onClick={() => setShowLogin(true)}
              style={
                showLogin ? { border: `solid 1px ${colors.blue}` } : {border: `solid 1px #d6d6d6` }
              }
            >
              All
            </Options>
            <Options
              onClick={() => setShowLogin(false)}
              style={
                !showLogin
                  ? { border: `solid 1px ${colors.blue}` }
                  : {border: `solid 1px #d6d6d6` }
              }
            >
              My faves
            </Options>
          </div>
          {/*showLogin ? <LoginForm /> : <SignupForm />*/}
        <CardItem 
          timelogo={icontimer}
          tittle="2 hours ago  by author"
          body="Aute tempor reprehenderit ex laboris. asdlkdadklasjdklajdakljdklajklfjaklsjdklajkdaklfjaklfjaklfaklflakjdklad.  Aliqua eiusmod est Lorem est fugiat reprehenderit eiusmod qui minim irure voluptate enim aliquip."
          favorite={Unfavorite}
        />
      </Container>
    </>
  );
}
