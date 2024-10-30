import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToastProvider from "./components/ToastProvider.jsx"
import App from './App.jsx'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './errorboundry/errorboundaries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
          <ToastProvider>
            <App />
          </ToastProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
