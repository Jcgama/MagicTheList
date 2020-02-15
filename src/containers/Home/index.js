// @flow
// @format
import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import type {CardType} from '../../components/Card/types';

const Home: () => React$Node = () => {
  const cards: CardType[] = [
    {
      name: 'Abundance',
      colors: ['Green'],
      type: 'Enchantment',
      setName: 'Tenth Edition',
      imageUrl: 'placehloder',
    },
    {
      name: 'Academy Researchers',
      colors: ['Blue'],
      type: 'Creature — Human Wizard',
      setName: 'Tenth Edition',
      imageUrl: 'placehloder',
    },
    {
      name: 'Adarkar Wastes',
      colors: [],
      type: 'Land',
      setName: 'Tenth Edition',
      imageUrl: 'placehloder',
    },
    {
      name: 'Afflict',
      colors: ['Black'],
      type: 'Instant',
      setName: 'Tenth Edition',
      imageUrl: 'placehloder',
    },
    {
      name: 'Aggressive Urge',
      colors: ['Green'],
      type: 'Instant',
      setName: 'Tenth Edition',
      imageUrl: 'placehloder',
    },
  ];
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({item}) => (
    <Card
      name={item.name}
      type={item.type}
      setName={item.setName}
      colors={item.colors}
      imageUrl={item.imageUrl}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
