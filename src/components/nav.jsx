import { Header, MyName, NavContainer, BtnMobile, Hamburger, Menu } from "./style/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(true);
  const [burguer, setBurguer] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  function toggleBurguer() {
    setBurguer(!burguer);
  }

  return (
    <Header>
      <MyName>GUILHERME CABRAL</MyName>
      <NavContainer >
      <BtnMobile onClick={() => {{toggleMenu()} {toggleBurguer()}}}>
        <Hamburger burguer={burguer}></Hamburger>
      </BtnMobile>
        <Menu toggle={toggle}>
          <AnchorLink
            style={{ textDecoration: "none" }}
            offset="120"
            href="#home"
          >
            <li>Apresentação</li>
          </AnchorLink>
          <AnchorLink
            style={{ textDecoration: "none" }}
            offset="120"
            href="#projects"
          >
            <li>Projetos</li>
          </AnchorLink>
          <AnchorLink
            style={{ textDecoration: "none" }}
            offset="120"
            href="#abilities"
          >
            <li>Habilidades</li>
          </AnchorLink>
          <AnchorLink
            style={{ textDecoration: "none" }}
            offset="120"
            href="#contact"
          >
            <li>Contato</li>
          </AnchorLink>
        </Menu>
      </NavContainer>
    </Header>
  );
}

export default Nav;
