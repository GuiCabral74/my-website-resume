import {
  ContainerNav,
  MyName,
  NavList,
  ListItem,
  LinkNav,
} from "./style/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {
  return (
    <ContainerNav>
      <MyName>GUILHERME CABRAL</MyName>
      <NavList>
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