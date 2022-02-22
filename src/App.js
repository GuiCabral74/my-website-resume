import { GlobalStyle } from "./components/style/styles";
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Abilities from "./components/abilities";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <Projects />
      <Abilities />
    </>
  );
}

export default App;
