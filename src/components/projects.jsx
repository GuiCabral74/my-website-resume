import { ContainerProjects, ProjectTitle, DivProject, ProjectName, ProjectDescription, SeeProject } from "./style/styles";

function Projects () {
  return(
    <ContainerProjects>
      <ProjectTitle>Projetos</ProjectTitle>
      <DivProject>
        <ProjectName>Nome do projeto</ProjectName>
        <ProjectDescription>Descrição do projeto</ProjectDescription>
        <SeeProject>Ver projeto</SeeProject>
      </DivProject>
    </ContainerProjects>
  )
}

export default Projects;