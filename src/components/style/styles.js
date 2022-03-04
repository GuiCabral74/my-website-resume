import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

/** GLOBAL STYLES */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    background: #2D2E2E;
    font-family: 'Source Code Pro', monospace;
    color: #fff;
    margin: 0 2rem;
  }
`;

/** NAV */

export const ContainerNav = styled.nav`
  padding: 2rem 0;
  margin: 0 -2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  position: fixed;
  top: 0;
  height: 5.5rem;
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
    margin-right: 2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 2rem;
  padding: 0;

  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #e0a80d;
    }
  }

  li {
    margin: 0 1rem;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    transition: .9s;
    display: ${(props) => (props.toggle ? "block" : "none")};
    position: absolute;
    top: 5.438rem;
    left: 28.438rem;
    background: #2d2e2e;
    height: ${(props) => (props.toggle ? "100vh" : "0")};
    font-size: 2rem;
    
    a {
      visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
      overflow-x: hidden;
    }

    li {
      padding-bottom: 1.563rem;
      padding: 1rem 0;
      margin: 0 1rem;
      &::after {
        content: "";
        width: 100%;
        height: 0.188rem;
        display: block;
        background: #747575;
        margin-top: 1.563rem;
      }
    }
  }
`;

/** HOME */

export const ContainerHome = styled.section`
  height: calc(100vh - 5.438rem);
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  @media (max-width: 440px) {
    margin-top: 3.125rem;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.188rem;
  margin: 7.063rem 0 1.5rem;
`;

export const SubTitle = styled.h4`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.125rem;
  margin-bottom: 2rem;
`;

export const ContactIcon = styled.img`
  margin-right: 1.5rem;
  transition: transform .2s;
  &:hover{
    transform: scale(1.5);
  }
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
  padding: 0.563rem 0;
  width: 13.438rem;
  text-align: center;
  transition: box-shadow .3s;
  border: 0.188rem solid;
  &:hover{
    color: #fff;
    background: none;
    border: 0.188rem solid #fff;
  }
`;

/** PROJECTS */

export const ContainerProjects = styled.section`
  width: 100%;
  margin-top: 14rem;
  color: #fff;
`;

export const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
`;

export const DivProject = styled.div`
  background: rgba(255, 255, 255, 0.04);
  //width: auto;
  padding: 2rem 2rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: space-evenly;
  :nth-child(odd){
    flex-direction: row-reverse;
  }
`;

export const DivInfos = styled.div`
  width: 43.813rem;
`

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
`;

export const SeeProject = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
  border: 0.188rem solid #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.563rem 1.5rem;
  &:hover {
    color: #e0a80d;
    border-color: #e0a80d;
  }
`;

export const SeeCode = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 3.25rem;
  &:hover {
    color: #e0a80d;
  }
`

export const DivImg = styled.div`
  width: 22.938rem;
  height: 18.625rem;
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

/** Abilities */

export const ContainerAbilities = styled.section`
  text-align: center;
  margin: 7.75rem -2rem 0;
`;

export const TitleAbilities = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 5rem 0;
`;

export const ContainerTechnologies = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Technology = styled.div`
  width: 13rem;
  background:linear-gradient(139.46deg, rgba(109, 111, 111, 0.6) 0%, rgba(109, 111, 111, 0.2) 99.22%);
  border: 0.063rem solid rgba(109, 111, 111, 0.2);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.375rem 2.5rem;
  transition: transform .2s;
  &:hover{
    box-shadow: 4px 4px 8px rgba(14, 14, 14, 0.25);
    transform: scale(1.1);
  }
`;

export const TechnologyName = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

/**CONTACT */

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10.25rem;
`

/**FOOTER */

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-bottom: 5rem;
`

export const Paragraph = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.625rem;
`

export const LinkLinkedin = styled.a`
  color: #fff;
`