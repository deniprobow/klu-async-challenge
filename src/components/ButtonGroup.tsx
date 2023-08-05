import React, { ChangeEvent, ReactElement, useState } from 'react'
import styles from '../styles/ButtonGroup.module.css'
import { useMessage } from '@/context/MessageContext';
import { DateTimeFormatter } from '@/utils/DateTimeFormatter';

function ButtonGroup(props:any): ReactElement {
  const { message, createMessage } = useMessage();
  const [input, setInput] = useState('');
  const [showingToast, setShowingToast ] = useState(false);

  const handleMessage = ()=> {
    if(input && input.length>0){
      let newData = {'id' : randomId(), 'message':input, 'datetime': DateTimeFormatter()}
      createMessage(newData);
      setInput('');
    }
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

  const randomId = (length = 24)=> {
    return Math.random().toString(36).substring(2, length+2);
  };

  return (
      <>
      <div className={styles.inputGroup}>
        <input data-testid={'input-message'} className={styles.inputMessage} value={input} onChange={handleChange} placeholder="Type Message..."/>
        <button disabled={input.length==0} data-testid={'button-send'} className={styles.buttonSend} onClick={handleMessage} type="button">
          {props.buttonLabel}
          <svg className={styles.buttonSendIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </button>
      </div>
      </>
      
  )
}
export default ButtonGroup
