import {
  ContainerNav,
  MyName,
  MenuMobile,
  NavList,
  ListItem,
  LinkNav,
} from "./style/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

function Nav() {

  const [toggle, setToggle] = useState (true);

  function toggleMenu () {
    setToggle(!toggle)
    }

  return (
    <ContainerNav>
      <MyName>GUILHERME CABRAL</MyName>
        <MenuMobile onClick={()=>toggleMenu()}>Menu</MenuMobile>
      <NavList toggle={toggle}>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#home"
        >
          <LinkNav>
            <ListItem>Apresentação</ListItem>
          </LinkNav>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#projects"
        >
          <LinkNav>
            <ListItem>Projetos</ListItem>
          </LinkNav>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#abilities"
        >
          <LinkNav>
            <ListItem>Habilidades</ListItem>
          </LinkNav>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: "none" }}
          offset="120"
          href="#contato"
        >
          <LinkNav>
            <ListItem>Contato</ListItem>
          </LinkNav>
        </AnchorLink>
      </NavList>
    </ContainerNav>
  );
}

export default Nav;