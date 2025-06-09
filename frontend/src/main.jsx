import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import URLContextProvider from "./context/urlContext.jsx";

createRoot(document.getElementById('root')).render(
    <URLContextProvider>
        <App/>
    </URLContextProvider>
)
