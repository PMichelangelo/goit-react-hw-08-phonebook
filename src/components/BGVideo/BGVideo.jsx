import loop from '../../video/loop.mp4';
import styles from './bgvideo.module.css';

const BGVideo = () => {
  return (
    <div className={styles.bgContainer}>
      <video src={loop} autoPlay loop muted className={styles.video} />
    </div>
  );
};

export default BGVideo;
