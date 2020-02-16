export const fetchCardsOnPage = (page = 0) =>
  fetch(
    `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=100&contains=imageUrl`,
  );
