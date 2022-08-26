import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
        <Routes>
          <>
            <Route index element={<Navigate to="home" />} />
            <Route path="/home" element={<HomePage />} />
          </>
        </Routes>
    </>
  );
}

export default App;
