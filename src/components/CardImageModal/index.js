import React from 'react';
import {Modal, Image, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
const CardImageModal = ({visible, onRequestClose, uri}) => (
  <Modal
    animationType="slide"
    visible={visible}
    transparent={true}
    onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <Image
        onLoad={() => console.log('hmmmmm')}
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
