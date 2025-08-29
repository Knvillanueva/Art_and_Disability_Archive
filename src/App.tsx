import { useState } from "react";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);

  return (
    <div>
      <NavBar />
      <Foot />
    </div>
  );
}
function Foot() {
  return (
    <footer className="footer-flex bg-dark text-light">
      <p className="d-flex justify-content-center align-items-center">
        &copy; {new Date().getFullYear()} UTEP Humanities Collaborative. All
        rights reserved.
        <div className="d-inline-flex justify-content-end">
          <ul className="list-unstyled mb-0">
            <li className="d-inline-flex align-self-end">
              <a
                className="d-inline"
                href="https://humanitiescollaborative.utep.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/HCLogo.png"
                  alt="Humanities Collaboraive Logo"
                  style={{ width: "50px", height: "50px" }}
                  className="align-self-center"
                />
              </a>
            </li>
            <li className="d-inline-flex align-self-end">
              <a
                className=""
                href="https://www.utep.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/utep_logo.png"
                  alt="UTEP Logo"
                  style={{ width: "60px", height: "40px" }}
                  className="align-self-center"
                />
              </a>
            </li>
          </ul>
        </div>
      </p>
    </footer>
  );
}
export default App;
