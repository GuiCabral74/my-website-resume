import { ContainerAbilities, TitleAbilities, ContainerTechnologies } from "./style/styles";
import CardTechnology from "./cardTechnology";
import TechnologiesList from "./technologiesList";

function Abilities() {
  return (
    <ContainerAbilities id="abilities">
      <TitleAbilities>Habilidades</TitleAbilities>
      <ContainerTechnologies>
        {TechnologiesList.map((i, index) => {
          return (
            <CardTechnology key={index} src={i.src} alt={i.alt} name={i.name} />
          );
        })}
      </ContainerTechnologies>
    </ContainerAbilities>
  );
}

export default Abilities;