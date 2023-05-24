import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { Home } from "./pages/Home";
import SearchList from "./components/Search";
import CardList from "./components/Collection";
import CardData from "./CardData.json";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);

  return (
    <div>
      <Router>
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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://humanitiescollaborative.utep.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="src/assets/HCLogo.png"
                      alt="Humanities Collaboraive Logo"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.utep.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="src/assets/utep_logo.png"
                      alt="UTEP Logo"
                      style={{ width: "60px", height: "40px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/Collection" element={<CardList />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:searchTerm" element={<SearchList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function SearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Known Disabilities..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
