import React from 'react'
import { Grid, Paper } from '@mui/material'
import Category from '@mui/icons-material/Category'
import LaptopMac from '@mui/icons-material/LaptopMac'
import Home from '@mui/icons-material/Home'
import Call from '@mui/icons-material/Call'
import { Beer as IBeer } from '../../types'

export interface TcompanyProps {
    beer: IBeer
}
const CompanyDetails: React.FC<TcompanyProps> = ({ beer }) => {
    return (
        <Paper>
            <Grid container padding={1}>
                <Grid marginRight={2}>
                    <Category />
                </Grid>
                <Grid xs={2}>Type</Grid>
                <Grid xs={8}>{beer?.brewery_type}</Grid>
            </Grid>
            <Grid container padding={1}>
                <Grid marginRight={2}>
                    <LaptopMac />
                </Grid>
                <Grid xs={2}>Website</Grid>
                <Grid xs={8}>
                    <a href={beer?.website_url} target="_blank">
                        {beer?.website_url}
                    </a>
                </Grid>
            </Grid>
            <Grid container padding={1}>
                <Grid marginRight={2}>
                    <Call />
                </Grid>
                <Grid xs={2}>Phone</Grid>
                <Grid xs={8}>{beer?.phone}</Grid>
            </Grid>
            <Grid container padding={1}>
                <Grid marginRight={2}>
                    <Home />
                </Grid>
                <Grid xs={2}>Address</Grid>
                <Grid xs={8}>
                    {`${beer?.street},
                    ${beer?.postal_code},
                    ${beer?.state_province},
                    ${beer?.state}
                `}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CompanyDetails
