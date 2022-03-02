import { ContainerNav, MyName, MenuMobile, NavList } from "./style/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <ContainerNav>
      <MyName>GUILHERME CABRAL</MyName>
      <MenuMobile onClick={() => toggleMenu()}>Menu</MenuMobile>
      <NavList toggle={toggle}>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#home"
        >
          <a>
            <li>Apresentação</li>
          </a>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#projects"
        >
          <a>
            <li>Projetos</li>
          </a>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#abilities"
        >
          <a>
            <li>Habilidades</li>
          </a>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#contact"
        >
          <a>
            <li>Contato</li>
          </a>
        </AnchorLink>
      </NavList>
    </ContainerNav>
  );
}

export default Nav;