//@flow
//@format
export type CardType = {
  name: string,
  colors: CardColor[],
  type: string,
  setName: string,
  imageUrl: string,
  onPress: Function,
};

type CardColor = 'White' | 'Blue' | 'Black' | 'Red' | 'Green';
