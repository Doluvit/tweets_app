import TweetCard from 'components/TweetCard/TweetCard';
import { CardBox } from 'components/TweetCard/TweetCard.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadMoreButton } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = currentPage => {
    axios
      .get(
        `https://652a9ed64791d884f1fd27e6.mockapi.io/tweets/users?limit=3&page=${currentPage}`
      )
      .then(function (response) {
        setUsers(prevUsers => [...prevUsers, ...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const handleLoadMore = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  return (
    <CardBox>
      {users && users.map(user => <TweetCard key={user.id} data={user} />)}
      <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
    </CardBox>
  );
};

export default TweetsPage;
