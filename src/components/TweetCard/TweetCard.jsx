import { Card, CardBox, Hero, Logo } from './TweetCard.styled';
import logo from '../../assets/img/logo.png'
import picture from '../../assets/img/picture.png'

const TweetCard = () => {
  return (
    <CardBox>
      <Card>
              <Logo src={logo} alt="img" />
              <Hero src={picture} alt="ex" />
      </Card>
    </CardBox>
  );
};

export default TweetCard;
