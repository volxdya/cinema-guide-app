import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import {BrowserRouter} from 'react-router-dom'
import './styles/main.global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="app">
                <App/>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
)
