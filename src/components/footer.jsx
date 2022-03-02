import { FooterContainer, Paragraph, LinkLinkedin } from "./style/styles";

function Footer () {
  const year = new Date();
  return(
    <FooterContainer id="footer">
      <Paragraph>Designed by © <LinkLinkedin href="https://www.linkedin.com/in/isabel-ara%C3%BAjo/" target="_blank">Isabel Lorrane Araújo</LinkLinkedin> | Developed by <LinkLinkedin href="https://www.linkedin.com/in/guilherme-rodrigues-cabral/" target="_blank">Guilherme Cabral</LinkLinkedin> | {year.getFullYear()}</Paragraph>
    </FooterContainer>
  )
}

export default Footer;