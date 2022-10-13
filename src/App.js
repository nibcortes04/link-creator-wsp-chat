import Container from "react-bootstrap/Container";

import { HomePage } from "./pages";

import logo from "./assets/nuticon.svg";
import "./App.css";

function App() {
  return (
    <Container fluid className="App px-0">
      <HomePage />
    </Container>
  );
}

export default App;
