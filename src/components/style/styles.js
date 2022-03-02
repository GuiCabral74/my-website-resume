import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

/** GLOBAL STYLES */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
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
    top: 87px;
    left: 455px;
    background: #2d2e2e;
    height: ${(props) => (props.toggle ? "100vh" : "0")};
    font-size: 32px;
    
    a {
      visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
      overflow-x: hidden;

    }

    li {
      padding-bottom: 25px;
      padding: 1rem 0;
      margin: 0 1rem;
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        display: block;
        background: #747575;
        margin-top: 25px;
      }
    }
  }
`;

// export const ListItem = styled.li`
//   margin: 0 1rem;
//   font-weight: 400;

//   @media (max-width: 800px) {
//     padding-bottom: 25px;
//     &::after {
//       content: "";
//       width: calc(100% - 32px);
//       height: 3px;
//       display: block;
//       background: #747575;
//       margin-top: 10px;
//     }
//   }
// `;

// export const LinkNav = styled.a`
//   text-decoration: none;
//   color: #fff;
//   &:hover {
//     color: #e0a80d;
//   }
// `;

/** HOME */

export const ContainerHome = styled.section`
  height: calc(100vh - 87px);
  //height: 100vh;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

`

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
  padding: 20px;
  width: 215px;
  text-align: center;
  transition: box-shadow .3s;
  &:hover{
    box-shadow: 0 4px 11px #747575;
  }
`;

/** PROJECTS */

export const ContainerProjects = styled.section`
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
  margin: 0  -2rem;
  padding-bottom: 40px;
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
  background:linear-gradient(139.46deg, rgba(225, 225, 225, 0.6) 0%, rgba(225, 225, 225, 0.2) 99.22%);
  border: 1px solid rgba(225, 225, 225, 0.2);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.375rem 2.5rem;
  &:hover{
    box-shadow: 4px 4px 8px rgba(14, 14, 14, 0.25);
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
  margin-top: 7.75rem;
`

/**FOOTER */

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-bottom: 80px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
`

export const LinkLinkedin = styled.a`
  color: #fff;
`