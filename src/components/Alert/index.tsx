import React, { useEffect } from 'react'
import { Snackbar, Alert as MuiAlert } from '@mui/material/'
import { useAlert } from '../../contexAPI/AlertContex'

function Alert() {
    const { alert, hideAlert } = useAlert()

    return (
        <Snackbar
            open={!!alert}
            autoHideDuration={6000}
            onClose={hideAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <MuiAlert
                elevation={6}
                variant="filled"
                onClose={hideAlert}
                severity={alert?.severity || 'info'}
            >
                {alert?.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default Alert
