import {ConstructionDiv, ContainerProjects, InConstruction, ProjectTitle, Quote} from "./style/styles";
import Typical from "react-typical";

function ComingSoon() {
    return (
        <ContainerProjects id="projects">
            <ProjectTitle>Projetos</ProjectTitle>
            <ConstructionDiv>
                <InConstruction>EM CONSTRUÇÃO</InConstruction>
                <Quote>
                    Em breve projetos utilizando: {' '}
                    <Typical
                        steps={[
                            'React.js', 2000,
                            'Angular', 2000,
                            'Next.js', 2000,
                            'Python', 2000,
                            'JavaScript', 2000,
                            'Sql', 2000,
                            'Node', 2000,
                            'TypeScript', 2000,
                        ]}
                        loop={Infinity}
                        wrapper='b'
                    />
                </Quote>
            </ConstructionDiv>
        </ContainerProjects>
    );
}

export default ComingSoon;
