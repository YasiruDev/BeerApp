import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import background from './../../../assets/images/background.jpg'
import styles from './About.module.css'
import { ABOUT_US } from '../../../utils'

function AboutUs() {
    const renderList = () => {
        return ABOUT_US.LIST.map((item, i) => {
            return <li key={i}>{item}</li>
        })
    }
    return (
        <Paper
            elevation={3}
            className={`${styles.paper} ${styles.tableContainer}`}
        >
            <Typography variant="h5" gutterBottom>
                {ABOUT_US.TITLE}
            </Typography>
            <Card>
                <CardMedia
                    component="img"
                    height="150"
                    image={background}
                    alt="BeerWiki"
                />
            </Card>
            <CardContent>
                <Typography
                    variant="body2"
                    component={'span'}
                    color="text.secondary"
                >
                    <div>{ABOUT_US.TXT}</div>
                    <ul>{renderList()}</ul>
                </Typography>
            </CardContent>
        </Paper>
    )
}

export default AboutUs
