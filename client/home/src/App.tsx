import "./App.css";
import HomePage from "./home-page/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
