import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import { GlobalStyle } from "./components/style/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <Projects />
    </>
  );
}

export default App;
