import React, { useState } from "react";
import { Home } from "../pages/Home";
import { SearchPage } from "../pages/SearchPage";
import About from "../pages/About";
import SearchList from "./Search";
import CardList from "./Collection";
import Biblio from "../pages/Biblio";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

export const NavBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              From Access to Acceptance: The Role of Disability in Art
            </a>
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
          <Route path="/Collection" element={<CardList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:searchTerm" element={<SearchList />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Bibliography" element={<Biblio />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default NavBar;
