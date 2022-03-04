import {
  ContainerProjects,
  ProjectTitle,
  DivProject,
  DivInfos,
  ProjectName,
  ProjectDescription,
  SeeProject,
  SeeCode,
  DivImg,
  ProjectImg,
} from "./style/styles";
import ProjectList from "./projectList";

function Projects() {

  return (
    <ContainerProjects id="projects">
      <ProjectTitle>Projetos</ProjectTitle>

      {ProjectList.map((i, index) => {
        return (
          <DivProject key={index}>
            <DivInfos>
              <ProjectName>{i.name}</ProjectName>
              <ProjectDescription>{i.info}</ProjectDescription>
              <SeeProject
                href={i.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                Ver projeto
              </SeeProject>
              <SeeCode href={i.repository} target="_blank" rel="noreferrer noopener">Ver código</SeeCode>
            </DivInfos>
            <DivImg>
              <ProjectImg src={i.img} alt={i.alt} />
            </DivImg>
          </DivProject>
        );
      })}
    </ContainerProjects>
  );
}

export default Projects;
