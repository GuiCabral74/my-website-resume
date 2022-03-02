import ContactList from "./contactList";
import { ContactContainer, ContactIcon } from "./style/styles";

function Contact() {
  return (
    <ContactContainer id="contact">
      {ContactList.map((i, index) => {
        return (
          <a key={index} href={i.href} target="_blank" rel="noreferrer noopener">
            <ContactIcon src={i.src} alt={i.alt} />
          </a>
        );
      })}
    </ContactContainer>
  );
}

export default Contact;