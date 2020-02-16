//@flow
//@format
import React from 'react';
import {Modal, Image, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import type {CardImageModalProps} from './types';
const CardImageModal: CardImageModalProps => React$Node = ({
  visible,
  onRequestClose,
  uri,
  onLoadStart,
  onLoadEnd,
  imgLoaded,
}: CardImageModalProps) => (
  <Modal
    animationType="slide"
    visible={visible}
    transparent={true}
    onRequestClose={onRequestClose}>
    <View style={styles.container}>
      {!imgLoaded && <Text style={styles.loadingText}>Carregando...</Text>}
      <Image
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <Button
        title="Fechar"
        type="solid"
        onPress={onRequestClose}
        buttonStyle={styles.buttonBg}
        titleStyle={styles.buttonTitle}
      />
    </View>
  </Modal>
);

export default CardImageModal;
