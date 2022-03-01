import { ContainerHome, Title, SubTitle, ContactIcon, BtnResume } from "./style/styles";
import Cv from "./myResume/Guilherme Cabral.pdf";
import ContactList from "./contactList";

function home() {
  return (
    <ContainerHome id="home">
      <Title>
        Olá, eu sou o<br /> Guilherme Cabral!
      </Title>
      <SubTitle>Desenvolvedor Front-End</SubTitle>
      <div style={{ marginBottom: "64px" }}>
        {ContactList.map((contact, index) => {
          return (
            <a target="_blank" href={contact.href} alt={contact.alt} key={index}>
              <ContactIcon src={contact.src} />
            </a>
          );
        })}
      </div>
      <BtnResume href={Cv} download="Curriculo Guilherme">
        Baixar currículo
      </BtnResume>
    </ContainerHome>
  );
}

export default home;