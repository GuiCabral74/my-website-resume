import { ContainerNav, MyName, NavList, ListItem, LinkNav } from "./style/styles";

function Nav () {
  return(
    <ContainerNav>
      <MyName>GUILHERME CABRAL</MyName>
      <NavList>
        <LinkNav href="#"><ListItem>Apresentação</ListItem></LinkNav>
        <LinkNav href="#"><ListItem>Projetos</ListItem></LinkNav>
        <LinkNav href="#"><ListItem>Habilidades</ListItem></LinkNav>
        <LinkNav href="#"><ListItem>Contato</ListItem></LinkNav>
      </NavList>
    </ContainerNav>
  )
}

export default Nav;