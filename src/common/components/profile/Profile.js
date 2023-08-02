import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './style';
import demoProfile from '../../../assets/images/demoProfile.jpg';
import {AirbnbRating} from 'react-native-ratings';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={demoProfile} style={styles.profilePic} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Restaurant Name</Text>
        <Text style={styles.description}>Description of the restaurant...</Text>
        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5} // Total number of stars
            defaultRating={4} // Initial rating value
            size={20} // Size of the stars
            showRating={false} // Hide the numeric rating value
            isDisabled={true}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            marginBottom: 5,
            fontSize: 18,
          }}>
          798
        </Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
