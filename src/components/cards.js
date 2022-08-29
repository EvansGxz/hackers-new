import styled from "@emotion/styled";
import { colors, fonts, typography } from "../styles";

const CardContainer = styled.div`
  width: 34.375rem;
  height: 6.5rem;
  border-radius: 6px;
  border: solid 1px #c4c4c4;
  background-color: ${colors.white};
  flex-direction: row;
  display: flex;
  margin: 0.975rem 0;
  @media screen and (max-width: 600px) {
    width: 90vw;
    }
 
`;

const TimeContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  align-items: center;
  width: 27.5rem;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 77vw;
    }
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.188rem 1.375rem 2.063rem;
  width: 4.25rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${colors.gray.high};
   @media screen and (max-width: 600px) {
    width: 90vw;
    }
 
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1.625rem 1rem 0.875rem;
  @media screen and (max-width: 600px) {
    margin: 2vh 0 0 0.875rem;
    width: 71vw;
    }
    
`;

const Image = styled.img`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.438rem;
  margin-right: 0.5rem;
`;

const Fav = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  cursor: pointer;
`;

const TimeText = styled.p`
  font-family: ${fonts.primary};
  ${typography.xs};
  color: ${colors.gray.light};
`;

const Body = styled.p`
  font-family: ${fonts.primary};
  ${typography.sm};
  font-weight: 500;
  color: ${colors.gray.medium};
  letter-spacing: 0.25px;
  height: 2.5rem;
 
`;

const TimeImg = ({ src }) => {
  return <Image src={src} />;
};

// Use only one
const LikeImg = ({ src }) => {
  return <Fav src={src} />;
};

export const CardItem = ({
  tittle,
  author,
  timelogo,
  body,
  path,
  id,
  comments,
  date,
  src,
}) => {
  let allFavorite = JSON.parse(localStorage.getItem("favoritePost"));


  function mouseOver(e) {
    e.target.style.opacity = "0.6";
  }

  function mouseOut(e) {
    e.target.style.opacity = "";
  }
  function handleCreateFavorite() {
    
    if (!allFavorite) {
      allFavorite = [];
    }

    const favorite = {
      post_body: body,
      post_id: id,
      link: path,
      author: author,
      date: date,
    };
    //Set storage
    allFavorite.push(favorite);
    localStorage.setItem("favoritePost", JSON.stringify(allFavorite));
  }

  function handleRemoveFavorite(){
    let allFavorite = JSON.parse(localStorage.getItem("favoritePost"));
    allFavorite = allFavorite.filter(function( obj ) {
    return obj.post_id !== id;
});
    localStorage.setItem("favoritePost", JSON.stringify(allFavorite));
  }
  return (
    <CardContainer onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <StyledLink href={path}>
        <TimeWrapper>
          <TimeContainer>
            <TimeImg src={timelogo} />
            <TimeText>{tittle}</TimeText>
          </TimeContainer>
          <BodyContainer>
            <Body>{body}</Body>
          </BodyContainer>
        </TimeWrapper>
      </StyledLink>

      <LikeContainer onClick={allFavorite ? allFavorite.find(c => c.post_id === id) ? handleRemoveFavorite : handleCreateFavorite : handleCreateFavorite }>
        <LikeImg
          id={id}
          src={src}
          body={body}
          path={path}
          comments={comments}
        />
      </LikeContainer>
    </CardContainer>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:visited {
    text-decoration: none;
  }
`;
