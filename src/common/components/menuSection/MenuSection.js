import React from 'react';
import {View, Text, Image, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

const MenuSection = ({id, title, price, img}) => {
  return (
    <View style={styles.menuItem}>
      <Image source={img} style={styles.profilePic} />
      <View>
        <Text style={styles.menuItemTitle}>{title}</Text>
        <Text style={styles.menuItemPrice}>{price}</Text>
      </View>
      <TouchableHighlight
        onPress={() => Alert.alert('Added in cart', 'Demo Alert')}>
        <Icon name={'plus-circle'} size={36} />
      </TouchableHighlight>
    </View>
  );
};

export default MenuSection;
