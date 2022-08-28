import styled from "@emotion/styled";
import { CardItem } from "../components/cards";
import icontimer from "../assets/icontimer.png";
//import Favorite from "../assets/heart_on.png";
import Unfavorite from "../assets/heart_off.png";
import { colors, fonts, typography } from "../styles";
import { useEffect, useState } from "react";
import { get } from "axios";
import { REACT_BASE_URI } from "../config";
import { Pagination } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  height: 15vh;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
`;

const Options = styled.span`
  ${typography.md}
  font-weight: bold;
  cursor: pointer;
  color: ${colors.gray.dark};
  border-radius: 2px;
  padding: 0.188rem 1rem;
  margin: 4.375rem 0;
  width: 6.125rem;
  text-align: center;
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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 36.875rem 36.875rem;
  justify-content: center;
  max-height: 55vh;
  overflow-y: scroll;
`;

const Header = () => {
  return (
    <Wrapper>
      <Tittle>HACKERS NEWS</Tittle>
    </Wrapper>
  );
};

export default function HomePage() {
  const [showAll, setShowAll] = useState(true);
  const [page, setPage] = useState(1);


  const handlePagination=(e, value)=>{
    setPage(value);
  }
  return (
    <>
      <Header />
      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Options
            onClick={() => setShowAll(true)}
            style={
              showAll
                ? {
                    border: `solid 1px ${colors.blue}`,
                    color: `${colors.blue}`,
                  }
                : { border: `solid 1px #d6d6d6` }
            }
          >
            All
          </Options>
          <Options
            onClick={() => setShowAll(false)}
            style={
              !showAll
                ? {
                    border: `solid 1px ${colors.blue}`,
                    color: `${colors.blue}`,
                  }
                : { border: `solid 1px #d6d6d6` }
            }
          >
            My faves
          </Options>
        </div>
        {showAll ? <All page={page}/> : <MyFaves />}
        <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>

        <Pagination count={10} page={page} onChange={handlePagination} variant="outline" shape="rounded" />
        </div>
      </Container>
    </>
  );
}

const All = ({page}) => {
  useEffect(() => {
    get(REACT_BASE_URI + page).then((data) => setReactData(data.data.hits));
  }, [page]);
  const [reactData, setReactData] = useState(null);

  return (
    <CardContainer>
      {reactData ? (
        reactData.map((data) => (
          <>
            <CardItem
              timelogo={icontimer}
              tittle={`${timeSince(
                new Date(
                  reactData[0].created_at.split("T").join(" ").slice(0, -5)
                )
              )} ago by ${data.author}`}
              body={data.comment_text}
              favorite={Unfavorite}
            />
          </>
        ))
      ) : (
        <p>No data found</p>
      )}
    </CardContainer>
  );
};

const MyFaves = () => {
  return <></>;
};

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
