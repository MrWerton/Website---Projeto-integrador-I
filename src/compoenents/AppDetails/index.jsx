import { Container,Description, Illustration  } from './styles';
import PhoneImg from '../../assets/phone.svg'
const AppDetails = () => {
  return (
    <Container>
      <Illustration>
        <img src={PhoneImg}/>
      </Illustration>
      <Description>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id officiis iste voluptatibus aliquam aspernatur odit ratione quae reprehenderit? Quae earum impedit esse enim amet est officia. Blanditiis, reiciendis impedit!
        </h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia tempora asperiores sed mollitia quae ad? Perspiciatis, omnis dolor! Earum accusamus ducimus ex! Est expedita quo laudantium illo quae sit!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo, velit eius maxime quo sunt repudiandae! Illum ex sit assumenda fugiat, quae aliquid magni a, blanditiis facilis odio dolorem alias.
        </h2>
      </Description>
    </Container>
  );
};

export default AppDetails;
