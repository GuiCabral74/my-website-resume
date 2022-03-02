import { GlobalStyle } from "./components/style/styles";
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Abilities from "./components/abilities";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <Projects />
      <Abilities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
