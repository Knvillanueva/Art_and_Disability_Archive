import React, { useState } from "react";
import { Home } from "../pages/Home";
import { SearchPage } from "../pages/SearchPage";
import About from "../pages/About";
import SearchList from "./Search";
import CardList from "./Collection";
import Biblio from "../pages/Biblio";
import { HashRouter, Route, Link, Routes } from "react-router-dom";

export const NavBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => setShowDropdown((s) => !s);

  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Use Link so it respects the router */}
            <Link className="navbar-brand" to="/">
              From Access to Acceptance: The Role of Disability in Art
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link d-inline-flex" to="/">
                  Home
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link d-inline-flex" to="/Collection">
                  Full Collection
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link d-inline-flex" to="/search">
                  Search
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link d-inline-flex" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link d-inline-flex" to="/Bibliography">
                  Bibliography
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<CardList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:searchTerm" element={<SearchList />} />
          <Route path="/about" element={<About />} />
          <Route path="/Bibliography" element={<Biblio />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default NavBar;
