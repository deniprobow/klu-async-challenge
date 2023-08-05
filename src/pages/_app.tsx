/** *****************************************************************
  | Author            : @deniprobow
  | Name              : _app.tsx
  | Updater           : @deniprobow
  | last_change       : 2023-08-05
  | Description_update: -
  | Description       : Main Layout Next.js
  *******************************************************************/

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MessageProvider } from '@/context/MessageContext'

 
export default function App({ Component, pageProps }: AppProps) {
  return (
      <MessageProvider>
        <Component {...pageProps} />
      </MessageProvider>
  )
}