import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

/** GLOBAL STYLES */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-bottom: 7.5rem;
    box-sizing: border-box;
    background: #2D2E2E;
    font-family: 'Source Code Pro', monospace;
    color: #fff;
    margin: 0 2rem;
  }
`

/** HOME */

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.188rem;
  margin-top: 7.063rem;
`

export const SubTitle = styled.h4`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.125rem;
  margin: 1.5rem 0 2rem;
`

export const BtnResume = styled.button`
  background: #E0A80D;
  width: 13.438rem;
  height: 3.25rem;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 2.125rem;
  letter-spacing: 0.06em;
  color: #2D2E2E;
  margin-top: 4.05rem;
`

/** NAV */

export const ContainerNav = styled.nav`
  padding-top: 2rem;
  margin: 0 -2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  position: fixed;
  top: 0;
  height: 3.438rem;
  width: 100vw;
  background: #2D2E2E;

`

export const MyName = styled.span`
  font-weight: 500;
  margin: 0 2rem;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 2rem;
  padding: 0;
`

export const ListItem = styled.li`
  margin: 0 1rem;
  font-weight: 400;
`

export const LinkNav = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover{
    color: #E0A80D;
  }
`

/** PROJECTS */

export const ContainerProjects = styled.div`
  width: 100%;
  margin-top: 14rem;
`

export const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`

export const DivProject = styled.div`
  background: #fff;
  color: #000;
  padding: 2rem 2rem;
`

export const ProjectName = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.016rem;
  margin: 0;
`

export const ProjectDescription = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0 3rem;
  color: #2D2E2E;
`

export const SeeProject = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
`

/** Abilities */

export const ContainerAbilities = styled.section`
  background: #3C3E3E;
  text-align: center;
  margin: 0 -2rem ;
`

export const TitleAbilities = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 5rem 0;
`

export const ContainerTechnologies = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-shrink: 0;
`

export const Technology = styled.div`
  width: 13rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.375rem 2.5rem;
`

export const TechnologyName = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`