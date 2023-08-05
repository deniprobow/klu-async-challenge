/** *****************************************************************
  | Author            : @deniprobow
  | Name              : MessageContext.tsx
  | Updater           : @deniprobow
  | last_change       : 2023-08-05
  | Description_update: -
  | Description       : MessageContext Helper for state management and store data to local storage
  *******************************************************************/

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
type messageContextType = {
    message: Array<any>;
    createMessage: (newData:any) => void;
    deleteMessage: (selectedData:any) => void;
};

const messageContextDefaultValues: messageContextType = {
    message: [],
    createMessage: (newData:any) => {},
    deleteMessage: (selectedData:any) => {},
};

const MessageContext = createContext<messageContextType>(messageContextDefaultValues);

export function useMessage() {
    return useContext(MessageContext);
}

type Props = {
    children: ReactNode;
};

export function MessageProvider({ children }: Props) {
    const [message, setMessage] = useState<Array<any>>([]); 

    useEffect(() => {
            const msgStorage =JSON.parse(localStorage.getItem('message')|| '[]');
            if(msgStorage)
                setMessage((msgStorage))
        
      }, []);

    const createMessage = (newData:any) => {
        let newMessage =  [...message, newData];
        setMessage(newMessage);
        localStorage.setItem("message",JSON.stringify(newMessage));
    };

    const deleteMessage = (selectedData:any) => {
        let newMessage = message.filter(function(item:any){ return item['id'] != selectedData })  
        console.log(JSON.stringify(selectedData)+"|"+JSON.stringify(newMessage));
        setMessage(newMessage);
        localStorage.setItem("message",JSON.stringify(newMessage));
    };

    const value = {
        message,
        createMessage,
        deleteMessage,
    };
    return (
        <>
            <MessageContext.Provider value={value}>
                {children}
            </MessageContext.Provider>
        </>
    );
}