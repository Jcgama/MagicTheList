// @flow
// @format
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import type {CardType} from '../../components/Card/types';
import Card from '../../components/Card';
import {fetchCardsOnPage} from '../../services';
import CardImageModal from '../../components/CardImageModal';

const INITIAL_LOADING_TEXT = 'Carregando...';
const FAILED_LOADING_TEXT = 'Algo deu errado aos carregar os cards...';

const Home: () => React$Node = () => {
  const [cards, setCards]: [CardType[], Function] = React.useState([]);
  const [emptyListText, setEmptyListText] = React.useState(
    INITIAL_LOADING_TEXT,
  );
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedCardImgUrl, setSelectedCardImgUrl] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const getCardsRequest = () => {
    fetchCardsOnPage(currentPage)
      .then(response => response.json())
      .then(responseJson => {
        setCards(
          [...cards, ...responseJson.cards].filter(card => card.imageUrl),
        );
        setCurrentPage(currentPage + 1);
      })
      .catch(e => setEmptyListText(FAILED_LOADING_TEXT));
  };
  const openImageModal = (url: string) => {
    setSelectedCardImgUrl(url);
    setModalVisible(true);
  };
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({item}) => (
    <Card
      name={item.name}
      type={item.type}
      setName={item.setName}
      colors={item.colors}
      imageUrl={item.imageUrl}
      onPress={() => openImageModal(item.imageUrl)}
    />
  );
  React.useEffect(getCardsRequest, []);
  return (
    <View style={styles.container}>
      <CardImageModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        uri={selectedCardImgUrl}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cards}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={5}
        onEndReached={getCardsRequest}
        ListEmptyComponent={() => (
          <View style={[styles.container, styles.centered]}>
            <Text style={styles.loadingText}>{emptyListText}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
