import Animation from '../Animation';
import { Container } from './styles';
import github from '../../assets/animations/github.json'
import figma from '../../assets/animations/figma.json'
import BtnLink from '../BtnLink';
const ProjectLinks = () => {
  const gitHubAnime = <Animation anime={github}/>
  const FigmaAnime = <Animation anime={figma}/>
  return (
    <Container>
     <BtnLink title="Design"  link='https://github.com/' Img={FigmaAnime}/>
     <BtnLink title="Repositório"  link='https://github.com/'  Img={gitHubAnime}/>
    </Container>
  );
};

export default ProjectLinks;
