import { ReactNode } from 'react'
import { ALERT_SEVERITY } from './types'

interface IAlertContexProps {
    showAlert: (message: string, severity?: ALERT_SEVERITY) => void
    hideAlert: () => void
    alert: IAlert | null
}

interface IAlert {
    message: string
    severity: ALERT_SEVERITY
}

interface IAlertProviderProps {
    children: ReactNode
}

export type { IAlertContexProps, IAlertProviderProps }
