import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote } from '../../redux/quote/quote-selectors';
import { fetchQuote } from '../../redux/quote/quote-operations';

import Button from '../Button/Button';
import Loader from 'components/Loader/Loader';
import BGVideo from 'components/BGVideo/BGVideo';

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
    <div className={styles.wrapper}>
      <BGVideo />
      <div className={styles.qouteContainer}>
        <h1 className={styles.headerText}>Hey, smile and remember:</h1>
        {error && <p>{error}</p>}
        {quotes && (
          <div className={styles.quotesWrapper}>
            <h2 className={styles.qoute}>"{quotes.quote}"</h2>
            <p className={styles.author}>{quotes.author}</p>
          </div>
        )}
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get another quote'}
        </Button>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default HomePageQuote;
