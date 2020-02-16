//@flow
//@format
import React from 'react';
import {ListItem} from 'react-native-elements';
import type {CardType} from './types';
import {View, Text} from 'react-native';
import styles from './styles';

const Card: (card: CardType) => React$Node = ({
  name,
  colors,
  type,
  setName,
  imageUrl,
  onPress,
}) => {
  return (
    <ListItem
      containerStyle={styles.container}
      onPress={onPress}
      title={`${name} | ${type}`}
      subtitle={
        <View style={styles.subtitleContainer}>
          <Text>{setName}</Text>
          {colors?.map((color, index) => (
            <View
              style={[styles.badge, {backgroundColor: color.toLowerCase()}]}
              key={index.toString()}
            />
          ))}
        </View>
      }
      bottomDivider
    />
  );
};

export default Card;
