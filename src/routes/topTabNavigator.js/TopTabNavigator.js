import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import UserReviewList from '../../screens/useReviewList/UserReviewList';
import MenuSectionList from '../../screens/menuSectionList/MenuSectionList';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Review" component={UserReviewList} />
        <Tab.Screen name="Menu" component={MenuSectionList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
