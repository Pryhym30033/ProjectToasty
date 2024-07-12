import React from 'react';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [content, setContent] = React.useState('');
  const [messageType, setMessageType] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      messageType: 'success',
      content: 'Testing the toasts!!!',
    },
  ]
  );

  function addToast(event){
    event.preventDefault();
    const nextToast = [
      ...toasts, {
        id: crypto.randomUUID(),
        messageType,
        content,
      }
    ]
    setToasts(nextToast);
    setMessageType(VARIANT_OPTIONS[0]);
    setContent('');
  }

  function dismissToasts(id){
    const nextToast = toasts.filter(toast =>{
      return toast.id !== id;
    })
    setToasts(nextToast);
  }
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf toasts={toasts} dismissToasts={dismissToasts} />

      <form className={styles.controlsWrapper}
      onSubmit={addToast}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" 
            className={styles.messageInput}
            value={content}
            onChange={event =>{
              setContent(event.target.value);
            }}
             />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>  
              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor={`variant-${variant}`} key={variant}>
              <input
                id={`Variant-${variant}`}
                type="radio"
                name="variant"
                value={variant}
                checked={variant === messageType}
                onChange={event =>{
                  setMessageType(event.target.value);
                }}
              />
                {variant}
                </label>
            )
          )}
        
          </div>   
      
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
