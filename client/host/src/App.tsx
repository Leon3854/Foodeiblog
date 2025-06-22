// import { lazy } from "react";
import Footer from "./layout/footer/Footer";
import { Route, Routes, Navigate } from "react-router";
import Header from "./layout/header/Header";
import HomePage from "../../home/src/home-page/HomePage";
import AboutPage from "../../about/src/about-page/AboutPage";

// const HomeApp = lazy(() => import("home/HomePage"));
// const AboutApp = lazy(() => import("about/AboutPage"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Резервный маршрут для несуществующих путей */}
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
