import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Grid, Paper, Button } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { Beer as IBeer } from '../../types'
import { fetchData } from './utils'
import CompanyDetails from './CompanyDetails'
import CompanyMap from './CompanyMap'
import { useFavorite } from '../../hooks/useFavorite'
import { TXT } from '../../utils'

const Beer = () => {
    const { id } = useParams()
    const [isFavorite, setIsFavorit] = useState(false)
    const [beer, setBeer] = useState<IBeer>()
    const [favorite, , setFavorite] = useFavorite()

    // eslint-disable-next-line
    useEffect(() => {
        fetchData(setBeer, id)
    }, [id])

    useEffect(() => {
        checkFavorites()
    }, [id, favorite])

    const checkFavorites = () => {
        favorite(id) ? setIsFavorit(true) : setIsFavorit(false)
    }
    const renderFavIcon: () => JSX.Element = () => {
        return isFavorite ? <Favorite /> : <FavoriteBorder />
    }

    return (
        <article>
            <section>
                <header>
                    <Typography variant="h1" component="h2" marginBottom={5}>
                        {beer?.name}
                    </Typography>
                </header>
                <main>
                    <Grid container spacing={2} marginBottom={5}>
                        <Grid item xs={4}>
                            <Grid container>
                                <CompanyDetails beer={beer as IBeer} />
                            </Grid>
                            <Grid container paddingTop={2}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    onClick={() =>
                                        setFavorite(
                                            beer?.id as string,
                                            beer?.name as string
                                        )
                                    }
                                    startIcon={renderFavIcon()}
                                >
                                    {TXT.FAV_ADD_BUTTON}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <CompanyMap
                                latitude={beer?.latitude as IBeer['latitude']}
                                longitude={
                                    beer?.longitude as IBeer['longitude']
                                }
                            />
                        </Grid>
                    </Grid>
                </main>
            </section>
        </article>
    )
}

export default Beer
