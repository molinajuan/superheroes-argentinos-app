import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../../ui";
import { DcPage, AllPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Hero } from "../components";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="flex-grow-1 container-fluid mt-3">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="all" element={<AllPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
};
