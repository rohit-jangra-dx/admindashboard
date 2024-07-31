import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UserDataContextProvider } from './contexts/UserDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataContextProvider>
    <App />
    </UserDataContextProvider>
  </React.StrictMode>,
)
