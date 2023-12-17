import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import './styles/global.css'
import { AlertProvider } from './contexAPI/AlertContex'
import Alert from './components/Alert'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <AlertProvider>
                <Router />
                <Alert />
            </AlertProvider>
        </ThemeProvider>
    </React.StrictMode>
)
