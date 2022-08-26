import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import { colors } from "./styles";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  margin: 8rem 15rem;
  justify-content: space-between;
  align-content: center;
  height: 100vh;
`;
function App() {
  return (
    <Container>
      <Routes>
        <>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<h1>Index</h1>} />
        </>
      </Routes>
    </Container>
  );
}

export default App;
