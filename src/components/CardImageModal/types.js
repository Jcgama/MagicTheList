//@flow

export type CardImageModalProps = {
  visible: boolean,
  onRequestClose: Function,
  uri: string,
  onLoadStart: Function,
  onLoadEnd: Function,
  imgLoaded: boolean,
};
