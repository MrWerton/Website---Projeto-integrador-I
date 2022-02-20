import Card from '../Card';
import { Container } from './styles';



const Team = () => {
  return (
    
    <Container>
      <h2>Nosso Time</h2>
      <div>
        <Card name="Araujo"  Img={'https://github.com/mrwerton.png'} />
        <Card name="Werton Pereira"  Img={'https://github.com/mrwerton.png'} />
        <Card name="Gabriele"  Img={'https://github.com/mrwerton.png'} />
      </div>
    </Container>
  );
};

export default Team;
