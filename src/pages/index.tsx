import ButtonGroup from '@/components/ButtonGroup'
import ButtonSend from '@/components/ButtonGroup'
import ContentMessage from '@/components/ContentMessage'
import styles from '../styles/Wrapper.module.css'
import { useState } from "react";
import { useMessage } from "@/context/MessageContext";
import { create } from 'domain';



/** *****************************************************************
  | Author            : @deniprobow
  | Name              : index.tsx
  | Updater           : @deniprobow
  | last_change       : 2023-08-05
  | Description_update: -
  | Description       : Page Index 
  *******************************************************************/
export default function Home() {
  const { message } = useMessage();
  return (
    <main data-testid={'main-container'} className={styles.wrapper}>
      <ContentMessage datas={message} data-testid={'content-message'} />
      <ButtonGroup buttonLabel="Send" data-testid={'button-group'} />
    </main>
  )
}

