import { Route, Routes } from "react-router-dom";
import AboutPage from "./about-page/AboutPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
