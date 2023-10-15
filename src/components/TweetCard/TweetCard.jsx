import {
  Card,
  FollowButton,
  Hero,
  Logo,
  UserAvatar,
  UserAvatarBorder,
  UserAvatarContainer,
  UserAvatarWrapper,
  UserInfoItem,
  UserInfoWrapper,
} from './TweetCard.styled';
import logo from '../../assets/img/logo.png';
import picture from '../../assets/img/picture.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TweetCard = ({ data }) => {
  const [isfollowing, setIsFollowing] = useState(false);
  const [user, setUser] = useState(data);

  useEffect(() => {
    const storedIsFollowing = localStorage.getItem(`following_${user.id}`);
    if (storedIsFollowing) {
      setIsFollowing(JSON.parse(storedIsFollowing));
    }
  }, [user.id]);

  const togglefollow = () => {
    if (isfollowing) {
      axios
        .put(
          `https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users/${user.id}`,
          { followers: user.followers - 1 }
        )
        .then(() => {
          localStorage.setItem(`following_${user.id}`, JSON.stringify(false));
          setIsFollowing(false);
          setUser({ ...user, followers: user.followers - 1 });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios
        .put(
          `https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users/${user.id}`,
          { followers: user.followers + 1 }
        )
        .then(() => {
          localStorage.setItem(`following_${user.id}`, JSON.stringify(true));
          setIsFollowing(true);
          setUser({ ...user, followers: user.followers + 1 });
        })
        .catch(error => {
          console.log(error);
        });
    }
    setIsFollowing(!isfollowing);
  };
  return (
    <Card>
      <Hero src={picture} alt="ex" />
      <Logo src={logo} alt="img" />
      <UserAvatarWrapper>
        <UserAvatarBorder>
          <UserAvatarContainer>
            <UserAvatar src={user.avatar} />
          </UserAvatarContainer>
        </UserAvatarBorder>
      </UserAvatarWrapper>
      <UserInfoWrapper>
        <UserInfoItem> {user.tweets} tweets</UserInfoItem>
        <UserInfoItem>{user.followers} followers</UserInfoItem>
      </UserInfoWrapper>
      <FollowButton
        onClick={togglefollow}
        isfollowing={isfollowing ? isfollowing.toString() : null}
      >
        {isfollowing ? 'following' : 'follow'}
      </FollowButton>
    </Card>
  );
};

export default TweetCard;
