import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchData } from './utils'
import { ApiParams, Beer } from '../../types'
import { Button, Paper, TextField, Link, Grid, Typography } from '@mui/material'
import styles from './Home.module.css'
import FavoriteList from './FavoriteList'
import AboutUs from './AboutUs'
import Search from '../../components/Search'
import { SEARCH_BOX } from './const'

const Home = () => {
    const navigate = useNavigate()
    const [beerList, setBeerList] = useState<Array<Beer>>([])
    const [params, setParams] = useState<ApiParams | null>(null)

    // eslint-disable-next-line

    useEffect(() => {
        if (params?.by_name) {
            const getData = setTimeout(() => {
                fetchData(setBeerList, params as ApiParams)
            }, 1000)
            return () => clearTimeout(getData)
        }
    }, [params])

    const handleOnclick = (value: string) => {
        navigate(`/beer/${value}`)
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.sliderContainer}
            spacing={3}
        >
            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={styles.sliderBox}>
                    <Search
                        title={SEARCH_BOX.TITLE}
                        data={beerList.map(({ id, name }) => ({
                            id,
                            label: name,
                        }))}
                        searchData={setParams}
                        handleOnclick={handleOnclick}
                    />
                    <AboutUs />
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <FavoriteList />
            </Grid>
        </Grid>
    )
}

export default Home
