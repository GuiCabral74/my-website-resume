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
`;

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
  background: #2d2e2e;
`;

export const MyName = styled.span`
  font-weight: 500;
  margin: 0 2rem;
`;
export const MenuMobile = styled.button`
  display: none;
  @media (max-width: 800px) {
    display: block;
    margin-right: 32px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 2rem;
  padding: 0;

  @media (max-width: 800px) {
    display: ${(props) => (props.toggle ? "block" : "none")};
    position: absolute;
    width: 100%;
    top: 87px;
    right: -44px;
    background: #2d2e2e;
    font-size: 32px;
    transition: 0.6s;
    overflow-y: hidden;
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
    height: ${(props) => (props.toggle ? "100vh" : "0")};
  }
`;

export const ListItem = styled.li`
  margin: 0 1rem;
  font-weight: 400;

  @media (max-width: 800px) {
    padding-bottom: 25px;
    &::after {
      content: "";
      width: calc(100% - 32px);
      height: 3px;
      display: block;
      background: #747575;
      margin-top: 10px;
    }
  }
`;

export const LinkNav = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #e0a80d;
  }
`;

/** HOME */

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.188rem;
  margin-top: 7.063rem;
`;

export const SubTitle = styled.h4`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.125rem;
  margin: 1.5rem 0 2rem;
`;

export const ContactIcon = styled.img`
  margin-right: 24px;
  transition: all 0.2s ease-in-out;
  /* &:hover{
    z-index: 999;
    width: 50px;
    margin: 0 24px -24px 0;
    top: -10px;
  } */
`;

export const BtnResume = styled.a`
  background: #e0a80d;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 2.125rem;
  letter-spacing: 0.06em;
  color: #2d2e2e;
  padding: 24px;
`;

/** PROJECTS */

export const ContainerProjects = styled.div`
  width: 100%;
  margin-top: 14rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const DivProject = styled.div`
  background: #fff;
  color: #000;
  padding: 2rem 2rem;
`;

export const ProjectName = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.016rem;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0 3rem;
  color: #2d2e2e;
`;

export const SeeProject = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
`;

/** Abilities */

export const ContainerAbilities = styled.section`
  background: #3c3e3e;
  text-align: center;
  margin: 0 -2rem;
`;

export const TitleAbilities = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 5rem 0;
`;

export const ContainerTechnologies = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-shrink: 0;
`;

export const Technology = styled.div`
  width: 13rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.375rem 2.5rem;
`;

export const TechnologyName = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;
