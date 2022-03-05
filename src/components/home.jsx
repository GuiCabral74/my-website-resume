import { ContainerHome, Title, SubTitle, DivImgContact, ContactIcon, BtnResume } from "./style/styles";
import Cv from "./myResume/Guilherme Cabral.pdf";
import ContactList from "./contactList";
import Typical from 'react-typical'

function Home() {

  return (
    <ContainerHome id="home">
      <Title>
        Olá, eu sou o<br /> Guilherme Cabral!
      </Title>
      <SubTitle ><Typical steps={['Desenvolvedor Front-End', 1000]}/> </SubTitle>
      <DivImgContact>
        {ContactList.map((contact, index) => {
          return (
            <a target="_blank" href={contact.href} rel="noreferrer noopener" alt={contact.alt} key={index}>
              <ContactIcon src={contact.src} />
            </a>
          );
        })}
      </DivImgContact>
      <BtnResume href={Cv} download="Curriculo Guilherme">
        Baixar currículo
      </BtnResume>
    </ContainerHome>
  );
}

export default Home;