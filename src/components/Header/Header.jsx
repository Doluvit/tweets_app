import {
  HeaderContainer,
  Navigation,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
         Home
        </StyledLink>
        <StyledLink to="/tweets">
          Tweets
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};



export default Header;