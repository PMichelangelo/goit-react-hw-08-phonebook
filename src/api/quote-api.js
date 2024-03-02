import axios from 'axios';

const quoteInstance = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/quotes',
});

const API_KEY = 'bVYe3kTvpa1WzTDENIemLQ==scd4HwqnRVoaKYoP';

export const requestQuote = async () => {
  try {
    const { data } = await quoteInstance.get('/', {
      params: {
        category: 'death',
      },
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};
