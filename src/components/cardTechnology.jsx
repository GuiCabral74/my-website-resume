import { Technology, TechnologyName } from "./style/styles";

const CardTechnology = (props) => {
  return (
    <Technology>
      <img src={props.src} alt={props.alt} />
      <TechnologyName>{props.name}</TechnologyName>
    </Technology>
  );
};

export default CardTechnology;