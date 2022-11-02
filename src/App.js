import { GlobalStyle } from "./components/style/styles";
import Nav from "./components/nav";
import Home from "./components/home";
import Abilities from "./components/abilities";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ComingSoon from "./components/comingSoon";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <ComingSoon/>
      <Abilities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
