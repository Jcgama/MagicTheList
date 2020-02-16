import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2e2e2e',
  },
  image: {
    height: Dimensions.get('window').height - 140,
    width: Dimensions.get('window').width - 60,
  },
  buttonBg: {
    backgroundColor: '#ffffff',
  },
  buttonTitle: {
    color: '#000000',
  },
});
