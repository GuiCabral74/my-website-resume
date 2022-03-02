import { ContainerHome, Title, SubTitle, ContactIcon, BtnResume } from "./style/styles";
import Cv from "./myResume/Guilherme Cabral.pdf";
import ContactList from "./contactList";
import Typical from 'react-typical'

function home() {
  return (
    <ContainerHome id="home">
      <Title>
        Olá, eu sou o<br /> Guilherme Cabral!
      </Title>
      <SubTitle><Typical steps={['Desenvolvedor Front-End', 1000]}/> </SubTitle>
      <div style={{ marginBottom: "64px" }}>
        {ContactList.map((contact, index) => {
          return (
            <a target="_blank" href={contact.href} rel="noreferrer noopener" alt={contact.alt} key={index}>
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