import { Title, SubTitle, BtnResume } from "./style/styles";
import SvgLinkedin from "./images/svgs/linkedin.svg";
import SvgGithub from "./images/svgs/github.svg";

function home() {
  return (
    <div id='home'>
      <Title>
        Olá, eu sou o<br /> Guilherme Cabral!
      </Title>
      <SubTitle>Desenvolvedor Front-End</SubTitle>
      <div>
        <a style={{"marginRight":"24px"}} target="_blank" href="https://www.linkedin.com/in/guilherme-rodrigues-cabral/">
          <img src={SvgLinkedin} />
        </a>
        <a target="_blank" href="https://github.com/GuiCabral74">
          <img src={SvgGithub} />
        </a>
      </div>
      <BtnResume>Baixar currículo</BtnResume>
    </div>
  );
}

export default home;