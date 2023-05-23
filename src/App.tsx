import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { Home } from "./pages/Home";
import CardList from "./components/CardTest";
import CardData from "./CardData.json";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);
  //const artCollection: Item[] = CardData;

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisability(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisability(true)}>
        My Button
      </Button>
      <h1>This is the heehee page</h1>;
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/CardTest">CardTest</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/CardTest" element={<CardTest />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function CardTest() {
  return (
    <div>
      <CardList></CardList>
    </div>
  );
}

export default App;
