import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Foot />
    </div>
  );
}

function Foot() {
  // Resolve images that live in src/assets
  const hcLogo = new URL("./assets/HCLogo.png", import.meta.url).href;
  const utepLogo = new URL("./assets/utep_logo.png", import.meta.url).href;

  return (
    <footer className="footer-flex bg-dark text-light">
      <p className="d-flex justify-content-center align-items-center">
        &copy; {new Date().getFullYear()} UTEP Humanities Collaborative. All rights reserved.
        <span className="d-inline-flex justify-content-end ms-2">
          <ul className="list-unstyled mb-0">
            <li className="d-inline-flex align-self-end me-2">
              <a
                className="d-inline"
                href="https://humanitiescollaborative.utep.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hcLogo}
                  alt="Humanities Collaborative Logo"
                  style={{ width: "50px", height: "50px" }}
                  className="align-self-center"
                />
              </a>
            </li>
            <li className="d-inline-flex align-self-end">
              <a
                href="https://www.utep.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={utepLogo}
                  alt="UTEP Logo"
                  style={{ width: "60px", height: "40px" }}
                  className="align-self-center"
                />
              </a>
            </li>
          </ul>
        </span>
      </p>
    </footer>
  );
}

export default App;
