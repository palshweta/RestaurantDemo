import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    backgroundColor: '#fafafa',
  },
  menuItemsContainer: {
    marginVertical: 15,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderColor: 'red',
    marginVertical: 5,
    padding: 5,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  menuItemTitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
  menuItemPrice: {
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
  },
});

export default styles;
