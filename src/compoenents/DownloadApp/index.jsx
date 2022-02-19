import { Container,Description, Illustration  } from './styles';
import PhonesImg from '../../assets/phones.png'
import AppleIcon from '../../assets/appleIcon.svg'
import GoogleIcon from '../../assets/googleIcon.svg'
import Button from '../Button';
const DownloadApp = () => {
  return (
    <Container>
      <Illustration>
        <img src={PhonesImg}/>
      </Illustration>
      <Description>
        <h2>
        Baixe-nos Agora
        </h2>
        <p>
        Gerencie suas tarefas e orgranize sua vida! Baixe já nosso app, é grátis!
        </p>
        <div class="footer">
          <Button Img={AppleIcon} description="Apple Store"/>
          <Button Img={GoogleIcon} description="Play Store"/>
        </div>
      </Description>
    </Container>
  );
};


export default DownloadApp;
