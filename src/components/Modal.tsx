import React from "react";
import { Button } from "./Button";
import styles from '@/styles/Button.module.css'
import stylesModal from '@/styles/Modal.module.css'
interface ButtonProps {
    closeModal: Function;
    deleteMessage : Function;
    description  : string;
    title : string;
    idMessage : string;
}
export default function Modal(props:ButtonProps) {
  return (
        <>
          <div
            className={stylesModal.modal}
          >
            <div className={stylesModal.modalWrapper}>
              {/*content*/}
              <div className={stylesModal.modalContent}>
                {/*header*/}
                <div className={stylesModal.modalHeader}>
                  <h3 className={stylesModal.modalHeaderTitle}>
                    {props.title}
                  </h3>
                  <button
                    className={stylesModal.modalHeaderButtonClose}
                    onClick={() => props.closeModal()}
                  >
                    <span className={stylesModal.modalHeaderSpanClose}>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className={stylesModal.modalBody}>
                  <p className={stylesModal.modalBodyDescription}>
                    {props.description}
                  </p>
                </div>
                {/*footer*/}
                <div className={stylesModal.modalFooter}>
                    <Button handleClick={()=>props.closeModal()} title="Cancel" class={styles.buttonCancel} />
                    <Button handleClick={()=>{props.deleteMessage(props.idMessage);props.closeModal()}} title="Ok" class={styles.buttonOk} />
                </div>
              </div>
            </div>
          </div>
          <div className={stylesModal.modalShadow}></div>
        </>
      )
}
