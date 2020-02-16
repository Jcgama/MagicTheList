import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2e2e2e',
  },
  image: {
    height: 440,
    width: 300,
  },
  buttonBg: {
    backgroundColor: '#ffffff',
  },
  buttonTitle: {
    color: '#000000',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 24,
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
  },
});
