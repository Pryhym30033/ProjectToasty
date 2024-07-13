import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast =>{
        return(
      <li className={styles.toastWrapper} key={toast.id}>
        <Toast variant={toast.messageType} id={toast.id}>{toast.content}</Toast>
      </li>
      )
      })}
    </ol>
  );
}

export default ToastShelf;
