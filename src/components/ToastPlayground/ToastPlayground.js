import React from 'react';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Button from '../Button';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [content, setContent] = React.useState('');
  const [messageType, setMessageType] = React.useState(VARIANT_OPTIONS[0]);
  const {createToast} = React.useContext(ToastContext);

  function addToast(event){
    event.preventDefault();
    createToast(messageType, content);
    setMessageType(VARIANT_OPTIONS[0]);
    setContent('');
  }
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf />

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
