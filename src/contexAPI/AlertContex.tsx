import React, { createContext, useContext, useState } from 'react'
import {
    ALERT_SEVERITY,
    IAlertProviderProps,
    IAlertContexProps,
} from '../types'

const AlertContex = createContext<IAlertContexProps | null>(null)

const AlertProvider: React.FC<IAlertProviderProps> = ({ children }) => {
    const [alert, setAlert] = useState<{
        message: string
        severity: ALERT_SEVERITY
    } | null>(null)

    const showAlert = (message: string, severity: ALERT_SEVERITY = 'info') => {
        setAlert({ message, severity })
    }

    const hideAlert = () => {
        setAlert(null)
    }

    return (
        <AlertContex.Provider value={{ showAlert, hideAlert, alert }}>
            {children}
        </AlertContex.Provider>
    )
}

const useAlert = (): IAlertContexProps => {
    const context = useContext(AlertContex)
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider')
    }
    return context
}
export { AlertProvider, useAlert }
