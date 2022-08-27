import styled from "@emotion/styled";
import { colors, fonts, typography } from "../styles";

const CardContainer = styled.div`
  width: 34.375rem;
  height: 6rem;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: ${colors.white};
  flex-direction: row;
  display: flex;
`;

const TimeContainer = styled.div`
display: flex;
`;

const BodyContainer = styled.div`
align-items: center;
width: 27.5rem;

overflow-y: hidden;
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
`;

const TimeWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 1.625rem 1rem 0.875rem;
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
`;

const TimeText = styled.p`
  font-family: ${fonts.primary};
  ${typography.xs};
  color: ${colors.gray.light};
`;

const Body = styled.p`
  font-family: ${fonts.primary};
  ${typography.sm};
  color: ${colors.gray.medium};
  letter-spacing: 0.25px;
`;

const TimeImg = ({ src }) => {
  return <Image src={src} />;
};

// Use only one
const LikeImg = ({ src }) => {
  return <Fav src={src} />;
};

export const CardItem = ({ tittle, timelogo, body, favorite }) => {
  return (
    <CardContainer>
    <TimeWrapper>
      <TimeContainer>
        <TimeImg src={timelogo} />
        <TimeText>{tittle}</TimeText>
      </TimeContainer>
    
      <BodyContainer>
        <Body>{body}</Body>
      </BodyContainer>
</TimeWrapper>
<LikeContainer>
    <LikeImg src={favorite} />
</LikeContainer>
    </CardContainer>
  );
};
