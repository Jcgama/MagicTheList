import {StyleSheet} from 'react-native';

const SUBTITLE_CONTAINER_SIZE = 30;

export default StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
  },
  subtitleContainer: {
    flexDirection: 'row',
    height: SUBTITLE_CONTAINER_SIZE,
    alignItems: 'center',
  },
  badge: {
    height: SUBTITLE_CONTAINER_SIZE / 3,
    width: SUBTITLE_CONTAINER_SIZE / 3,
    borderRadius: SUBTITLE_CONTAINER_SIZE / 3,
    marginLeft: 10,
  },
});
