//@flow
//@format
export type CardType = {
  name: string,
  colors: CardColor[],
  type: string,
  setName: string,
  imageUrl: string,
};

type CardColor = 'White' | 'Blue' | 'Black' | 'Red' | 'Green';
