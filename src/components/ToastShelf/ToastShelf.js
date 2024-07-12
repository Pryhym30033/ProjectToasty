import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({messageType, content}) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant={messageType}>{content}</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
