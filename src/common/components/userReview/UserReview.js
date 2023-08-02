import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import styles from './style';

const UserReview = ({id, img, name, rating, review}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={styles.profilePic} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratingContainer}>
            <AirbnbRating
              count={5}
              defaultRating={rating}
              size={15}
              showRating={false}
              isDisabled={true}
            />
          </View>
        </View>
        <Text style={styles.description}>{review}</Text>
      </View>
    </View>
  );
};


export default UserReview;
