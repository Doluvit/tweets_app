import {
  Card,
  CardBox,
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
import { useEffect, useState } from 'react';
import axios from 'axios';

const TweetCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [users, setUsers] = useState(false);
  const [followersQuery, setFollowersQuery] = useState(null);

  useEffect(() => {
    axios
      .get('https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users')
      .then(function (response) {
        setUsers(response.data[1]);
        setFollowersQuery(response.data[1].followers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const togglefollow = () => {
   
    if (isFollowing) {
      setFollowersQuery(followersQuery - 1);
      axios
        .put(
          `https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users/${users.id}`,
          { followers: followersQuery - 1 }
        )
        .then(function (response) {
          console.log('added');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setFollowersQuery(followersQuery + 1);
      axios
        .put(
          `https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users/${users.id}`,
          { followers: followersQuery + 1 }
        )
        .then(function (response) {
          console.log('ok');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <CardBox>
      <Card>
        <Hero src={picture} alt="ex" />
        <Logo src={logo} alt="img" />
        <UserAvatarWrapper>
          <UserAvatarBorder>
            <UserAvatarContainer>
              <UserAvatar src={users.avatar} />
            </UserAvatarContainer>
          </UserAvatarBorder>
        </UserAvatarWrapper>
        <UserInfoWrapper>
          <UserInfoItem> {users.tweets} tweets</UserInfoItem>
          <UserInfoItem>{followersQuery} followers</UserInfoItem>
        </UserInfoWrapper>
        <FollowButton onClick={togglefollow} isFollowing={isFollowing}>
          {isFollowing ? 'following' : 'follow'}
        </FollowButton>
      </Card>
    </CardBox>
  );
};

export default TweetCard;
