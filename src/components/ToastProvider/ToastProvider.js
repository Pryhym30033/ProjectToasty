import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);

  function createToast(messageType, content){
    const nextToast = [
      ...toasts, {
        id: crypto.randomUUID(),
        messageType,
        content,
      }
    ]
    setToasts(nextToast);
  }

  function dismissToasts(id){
      const nextToast = toasts.filter(toast =>{
        return toast.id !== id;
      })
      setToasts(nextToast);
    }
  
  return (
  <ToastContext.Provider 
  value={{
    toasts,
    createToast,
    dismissToasts
  }}>
    {children}
  </ToastContext.Provider>
  );
}

export default ToastProvider;
