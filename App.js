//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RestaurantProfile from './src/screens/restaurentProfile/RestaurentProfile';
import Profile from './src/common/components/profile/Profile';
import MyTabs from './src/routes/topTabNavigator.js/TopTabNavigator';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <RestaurantProfile />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
