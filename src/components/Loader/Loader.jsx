import { InfinitySpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <InfinitySpin
        visible={true}
        width="200"
        color="rgb(11, 90, 226)"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
