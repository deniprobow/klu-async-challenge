import React, { ReactElement, useCallback, useState } from 'react'
import styles from '../styles/ContentMessage.module.css'
import {TimeHourMinuteFormatter} from '../utils/DateTimeFormatter'
import { FaTrash } from "react-icons/fa";
import { useMessage } from '@/context/MessageContext';
import LinkPreview from './LinkPreview';
import Modal from './Modal';
import { Anchorme } from 'react-anchorme'


function ContentMessage(props:any) {
    const { message, deleteMessage } = useMessage();
    const [showingModal, setShowingModal] = useState(false);
    const [idMessage, setIdMessage] = useState('');
    
    const handleDelete = useCallback((id:string) =>{ 
        setShowingModal(true)
        setIdMessage(id);
    },[message, showingModal, idMessage])

    const closeModal = ()=> setShowingModal(false)
    
    return (
        <>
        <div className={styles.contentMessage} data-testid={'list-content-message'}>
            {
                props.datas &&
                props.datas.sort() &&
                props.datas.map((el:any)=>{
                    return(
                        <div key={el.id} >
                        <div className={styles.detailMessage} >
                            <Anchorme data-id={el.id}>{el.message}</Anchorme><br/>
                            <small className={styles.detailTime}>{TimeHourMinuteFormatter(el.datetime)}</small> <button onClick={()=>handleDelete(el.id)} data-testid={el.message} className={styles.deleteMessageIconButton} > <span className={styles.deleteMessageIcon}><FaTrash /></span> </button>
                        </div>
                        {
                            el.message.match(/\bhttps?:\/\/\S+/gi) &&
                            (
                                <LinkPreview
                                    url={el.message.match(/\bhttps?:\/\/\S+/gi)} // link you want to preview
                                />
                            )
                        } 
                        </div>
                        )
                    
                })
            }
        </div>
        {
            showingModal &&
            <Modal idMessage={idMessage} title='Confirm' description='Delete the message?' deleteMessage={deleteMessage} closeModal={closeModal}  />
        }
        </>
    )
}
export default ContentMessage
