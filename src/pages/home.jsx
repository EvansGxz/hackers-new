import styled from "@emotion/styled";
import { CardItem } from "../components/cards";
import icontimer from "../assets/icontimer.png";
import { colors, fonts, typography } from "../styles";
import { useEffect, useState } from "react";
import { get } from "axios";
import { ANGULAR_BASE_URI, REACT_BASE_URI, VUEJS_BASE_URI } from "../config";
import { Pagination } from "@mui/material";
import { Dropdown } from "reactjs-dropdown-component";
import { ddlOptions } from "../components/dropdown";
import Favorite from "../assets/heart_on.png";
import Unfavorite from "../assets/heart_off.png";

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
  height: 2.225rem;
  width: 7.125rem;
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
  @media screen and (max-width: 600px) {
    margin: 0 1vw;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 36.875rem 36.875rem;
  justify-content: center;
  max-height: 55vh;
  overflow-y: scroll;
  @media screen and (max-width: 600px) {
    grid-template-columns: 0;
    max-height: 100vh;
    justify-content: flex-start;
    margin-left: 1vw;
  }
`;
const DdlContainer = styled.div`
  margin-left: 12.7rem;
  @media screen and (max-width: 600px) {
    margin-left: 2vw;
  }
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

  const handlePagination = (e, value) => {
    setPage(value);
  };
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
        {showAll ? <All page={page} /> : <MyFaves />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          <Pagination
            count={10}
            page={page}
            onChange={handlePagination}
            variant="outline"
            shape="rounded"
          />
        </div>
      </Container>
    </>
  );
}

const All = ({ page }) => {
  let showFavorite = JSON.parse(localStorage.getItem("favoritePost"));

  const [comments, setComments] = useState(null);
  const [ddl, setDdl] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("ddl")) setDdl(localStorage.getItem("ddl"));
    if (ddl) {
      if (ddl === "vue")
        get(VUEJS_BASE_URI + page).then((data) => {
          setComments(data.data.hits);
        });
      if (ddl === "angular")
        get(ANGULAR_BASE_URI + page).then((data) =>
          setComments(data.data.hits)
        );
      if (ddl === "react")
        get(REACT_BASE_URI + page).then((data) => setComments(data.data.hits));
    }
  }, [page, comments, ddl]);

  const handleListChange = (e) => {
    const { value } = e;
    setDdl(value);
    localStorage.setItem("ddl", value);
  };

  return (
    <>
      <DdlContainer>
        <Dropdown
          name="News List"
          title={
            localStorage.getItem("ddl")
              ? localStorage.getItem("ddl")
              : "Select your news"
          }
          list={ddlOptions}
          onChange={handleListChange}
          styles={{
            headerTitle: {
              fontSize: "0.875rem",
              color: colors.black.medium,
              fontWeight: "500",
            },
            listItem: {
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "1.57rem",
            },
            wrapper: { borderRadius: "4px", border: "1px solid #2e2e2e" },
          }}
        />
      </DdlContainer>
      <CardContainer>
        {comments ? (
          comments.map((data, index) => (
            <div key={index}>
              <CardItem
                timelogo={icontimer}
                tittle={`${timeSince(
                  new Date(data.created_at.split("T").join(" ").slice(0, -5))
                )} ago by ${data.author}`}
                body={data.comment_text}
                path={data.story_url}
                id={data.objectID}
                date={data.created_at}
                comments={comments}
                author={data.author}
                src={
                  showFavorite
                    ? showFavorite.find((c) => c.post_id === data.objectID)
                      ? Favorite
                      : Unfavorite
                    : Unfavorite
                }
              />
            </div>
          ))
        ) : (
          <p>Data not found</p>
        )}
      </CardContainer>
    </>
  );
};

const MyFaves = () => {
  const [showFavorite, setShowFavorite] = useState(null);

  useEffect(() => {
    setShowFavorite(JSON.parse(localStorage.getItem("favoritePost")));
  }, [showFavorite]);
  return (
    <>
      <CardContainer>
        {showFavorite ? (
          showFavorite.map((data, index) => (
            <div key={index}>
              <CardItem
                timelogo={icontimer}
                tittle={`${timeSince(
                  new Date(data.date.split("T").join(" ").slice(0, -5))
                )} ago by ${data.author}`}
                body={data.post_body}
                path={data.link}
                id={data.post_id}
                src={Favorite}
              />
            </div>
          ))
        ) : (
          <p>Data not found</p>
        )}
      </CardContainer>
    </>
  );
};

export function timeSince(date) {
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
