import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import style from './Progress.module.css'

const Progress: React.FC = () => {
    return (
        <Box className={style.progressBox}>
            <CircularProgress />
        </Box>
    )
}

export default Progress
