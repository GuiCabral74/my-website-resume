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

export const Header = styled.header`
  height: 5.5rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -2rem;
  font-size: 1.125rem;
  position: fixed;
  top: 0;
  width: 100vw;
  background: #2d2e2e;
`;

export const MyName = styled.span`
  font-weight: 500;
`;

export const NavContainer = styled.nav`
  @media (max-width: 800px) {
  background: #2d2e2e;
    
}
`
export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    padding: .5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: .5rem;

  }
`;

export const Hamburger = styled.span`
  display: block;
  border-top: 2px solid;
  width: 20px;
  color: #fff;
  &:after , :before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: .3s;
    position: ${(props) => (props.burguer ? "relative" : "static")};
  }
  @media (max-width: 800px) {
    //background: ${(props) => (props.burguer ? "red" : "blue")};
    border-top-color: ${(props) => (props.burguer ?"transparent" : "currentColor")};
    :before {
      transform: rotate(${(props) => (props.burguer ? "135deg" : "0")});
    }
    :after {
      transform: rotate(${(props) => (props.burguer ? "-135deg" : "0")});
      top: -7px;
    }
  }
`


export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  justify-content: space-between;
  padding: 0;

  a {
    display: block;
    padding: .5rem;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #e0a80d;
    }
  }

  li {
    font-weight: 400;
  }

  @media (max-width: 800px) {
    margin: 0;
    font-size: 2rem;
    display: block;
    position: absolute;
    width: ${(props) => (props.toggle ? "0" : "100vw")};
    top: 5.438rem;
    right: 0;
    background: #2d2e2e;
    transition: .6s;
    z-index: 1000;
    height: 100vh;
    visibility: ${(props) => (props.toggle ? "hidden" : "visible")};
    overflow-x: hidden;

    li {
      padding-bottom: 1.563rem;
      padding: 1rem 0;
      margin-top: 39px;
      text-align: center;


      /* &::after {
        content: "";
        width: 100%;
        height: 0.188rem;
        display: block;
        background: #747575;
        margin-top: 1.563rem;
      } */
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
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.188rem;
  margin: 7.063rem 0 1.5rem;
  @media (max-width: 440px) {
    font-size: 24px;
    line-height: 34px;
    margin-top: 4rem;
  }
`;

export const SubTitle = styled.h4`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.125rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    p {
      &::after {
        visibility: hidden;
      }
    }
  }
  @media (max-width: 440px) {
    font-size: 18px;
  }
`;

export const DivImgContact = styled.div`
  margin-bottom: 64px;
  @media (max-width: 440px) {
    margin-bottom: 48px;
  }
`;

export const ContactIcon = styled.img`
  margin-right: 1.5rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
  @media (max-width: 440px) {
    margin: 0 12px;
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
  transition: box-shadow 0.3s;
  border: 0.188rem solid;
  border-color: transparent;
  &:hover {
    color: #fff;
    background: none;
    border: 0.188rem solid #fff;
  }
  @media (max-width: 440px) {
    width: 288px;
    margin: 0 auto;
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
  :nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const DivInfos = styled.div`
  width: 43.813rem;
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
`;

export const DivImg = styled.div`
  width: 22.938rem;
  height: 18.625rem;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

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
  background: linear-gradient(
    139.46deg,
    rgba(109, 111, 111, 0.6) 0%,
    rgba(109, 111, 111, 0.2) 99.22%
  );
  border: 0.063rem solid rgba(109, 111, 111, 0.2);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.375rem 2.5rem;
  transition: transform 0.2s;
  &:hover {
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
`;

/**FOOTER */

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-bottom: 5rem;
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.625rem;
`;

export const LinkLinkedin = styled.a`
  color: #fff;
`;
