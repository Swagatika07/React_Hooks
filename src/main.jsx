import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> //Because of Strictmode, the console will show the warning message twice.
    <App />
  // </StrictMode>
    
  
)
