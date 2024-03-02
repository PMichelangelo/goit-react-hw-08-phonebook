import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote } from '../../redux/quote/quote-selectors';
import { fetchQuote } from '../../redux/quote/quote-operations';
import Button from '../Button/Button';

import styles from './homePageQuote.module.css';

const HomePageQuote = () => {
  const { quote, isLoading, error } = useSelector(selectQuote);

  const quotes = quote.length > 0 ? quote[0] : null;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!quotes) {
      dispatch(fetchQuote());
    }
  }, [dispatch, quotes, isLoading]);

  const handleClick = () => {
    dispatch(fetchQuote());
  };

  console.log(isLoading);

  return (
    <div>
      <h1>Home Page</h1>
      {error && <p>{error}</p>}
      {quotes && (
        <div>
          <h2>{quotes.quote}</h2>
          <p>{quotes.author}</p>
        </div>
      )}
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get another quote'}
      </Button>
    </div>
  );
};

export default HomePageQuote;
