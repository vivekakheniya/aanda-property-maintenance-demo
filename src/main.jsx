import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react-image-gallery/styles/css/image-gallery.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
