import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import BGVideo from 'components/BGVideo/BGVideo';
import { LoaderBlock } from 'components/Loader/Loader';

import styles from './sharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <span className={styles.fallbackContainer}>
            <LoaderBlock />
          </span>
        }
      >
        <Outlet />
      </Suspense>
      <span className={styles.bgVideoContainer}>
        <BGVideo />
      </span>
    </>
  );
};

export default SharedLayout;
