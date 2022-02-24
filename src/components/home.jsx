import { Title, SubTitle, ContactIcon, BtnResume } from "./style/styles";
import SvgLinkedin from "./images/svgs/linkedin.svg";
import SvgGithub from "./images/svgs/github.svg";
import Cv from "./myResume/Guilherme Cabral.pdf"

function home() {
  return (
    <div id='home'>
      <Title>
        Olá, eu sou o<br /> Guilherme Cabral!
      </Title>
      <SubTitle>Desenvolvedor Front-End</SubTitle>
      <div style={{"marginBottom":"64px"}}>
        <a target="_blank" href="https://www.linkedin.com/in/guilherme-rodrigues-cabral/">
          <ContactIcon src={SvgLinkedin} />
        </a>
        <a target="_blank" href="https://github.com/GuiCabral74">
          <ContactIcon src={SvgGithub} />
        </a>
      </div>
      <BtnResume href={Cv} download="Curriculo Guilherme">Baixar currículo</BtnResume>
    </div>
  );
}

export default home;