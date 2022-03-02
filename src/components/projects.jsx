import { ContainerProjects, ProjectTitle, DivProject, ProjectName, ProjectDescription, SeeProject } from "./style/styles";
import ProjectList from "./projectList";

function Projects () {

  return(
    <ContainerProjects id='projects'>
      <ProjectTitle>Projetos</ProjectTitle>

        {ProjectList.map((i, index) => {
          return(
            <DivProject key={index} img={i.img}>
              <ProjectName>{i.name}</ProjectName>
              <ProjectDescription>{i.info}</ProjectDescription>
              <SeeProject href={i.link} target="_blank" rel="noreferrer noopener">Ver projeto</SeeProject>
            </DivProject>
          )
        })}
    </ContainerProjects>
  )
}

export default Projects;