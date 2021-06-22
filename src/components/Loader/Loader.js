import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AppLoader = () => {
  return (
    <div className={styles.Loader}>
      <Loader
        style={styles}
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
      />
    </div>
  );
};

export default AppLoader;
