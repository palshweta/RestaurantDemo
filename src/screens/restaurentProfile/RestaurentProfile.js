import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from '../../common/components/profile/Profile';
import MyTabs from '../../routes/topTabNavigator.js/TopTabNavigator';

const RestaurantProfile = () => {
  return (
    <View style={styles.container}>
      <Profile />
      <MyTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantProfile;
