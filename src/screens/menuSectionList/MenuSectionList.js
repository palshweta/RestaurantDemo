import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MenuSection from '../../common/components/menuSection/MenuSection';
import styles from './style';

const MenuSectionList = () => {
  const [selectedCategory, setSelectedCategory] = useState('select category');

  const menuItems = [
    {
      id: 1,
      title: 'Spicy Noodles',
      price: '$10.99',
      img: require('../../assets/images/noodles.jpeg'),
    },
    {
      id: 2,
      title: 'Paneer Butter Masala',
      price: '$15.99',
      img: require('../../assets/images/paneerbuttermasala.jpg'),
    },
    {
      id: 3,
      title: 'Spicy Noodles',
      price: '$10.99',
      img: require('../../assets/images/noodles.jpeg'),
    },
    {
      id: 4,
      title: 'Paneer Butter Masala',
      price: '$15.99',
      img: require('../../assets/images/paneerbuttermasala.jpg'),
    },
    {
      id: 5,
      title: 'Spicy Noodles',
      price: '$10.99',
      img: require('../../assets/images/noodles.jpeg'),
    },
    {
      id: 6,
      title: 'Paneer Butter Masala',
      price: '$15.99',
      img: require('../../assets/images/paneerbuttermasala.jpg'),
    },
    {
      id: 7,
      title: 'Spicy Noodles',
      price: '$10.99',
      img: require('../../assets/images/noodles.jpeg'),
    },
    {
      id: 8,
      title: 'Paneer Butter Masala',
      price: '$15.99',
      img: require('../../assets/images/paneerbuttermasala.jpg'),
    },
  ];

  const renderMenuItem = ({item}) => (
    <MenuSection
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.img}
    />
  );

  return (
    <View style={styles.menuContainer}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={itemValue => setSelectedCategory(itemValue)}
        style={styles.dropdownStyle}
        itemStyle={styles.dropdownItem}>
        <Picker.Item label="Select Category" value="select category" />
        <Picker.Item label="Appetizers" value="appetizers" />
        <Picker.Item label="Main Course" value="main_course" />
      </Picker>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item, index) => item.id}
        style={styles.menuItemsContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MenuSectionList;
