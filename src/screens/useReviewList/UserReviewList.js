import React from 'react';
import {FlatList} from 'react-native';
import UserReview from '../../common/components/userReview/UserReview';

const UserReviewList = () => {
  const userReviews = [
    {
      id: 1,
      img: require('../../assets/images/demoEaters.jpeg'),
      name: 'user1',
      rating: 3,
      review: `Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.`,
    },
    {
      id: 2,
      img: require('../../assets/images/demoEaters.jpeg'),
      name: 'user2',
      rating: 4,
      review: `Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.`,
    },
    {
      id: 3,
      img: require('../../assets/images/demoEaters.jpeg'),
      name: 'user3',
      rating: 5,
      review: `Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.`,
    },
    {
      id: 4,
      img: require('../../assets/images/demoEaters.jpeg'),
      name: 'user4',
      rating: 4,
      review: `Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.`,
    },
    {
      id: 5,
      img: require('../../assets/images/demoEaters.jpeg'),
      name: 'user5',
      rating: 2,
      review: `Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.`,
    },
  ];

  const renderUserReview = ({item}) => (
    <UserReview
      id={item.id}
      img={item.img}
      name={item.name}
      rating={item.rating}
      review={item.review}
    />
  );

  return (
    <FlatList
      data={userReviews}
      renderItem={renderUserReview}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default UserReviewList;
