import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, dismissToasts}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast =>{
        return(
      <li className={styles.toastWrapper} key={toast.id}>
        <Toast variant={toast.messageType} id={toast.id} dismissToasts={dismissToasts}>{toast.content}</Toast>
      </li>
      )
      })}
    </ol>
  );
}

export default ToastShelf;
