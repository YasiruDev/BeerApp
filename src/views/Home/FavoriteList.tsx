import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Button, Checkbox, Link, Paper, Typography } from '@mui/material'
import styles from './Home.module.css'
import { ALERT_SEVERITY, Beer, FavoriteItem } from '../../types'
import { useAlert } from '../../contexAPI/AlertContex'
import { useFavorite } from '../../hooks/useFavorite'
import { FAVORITE, MESSAGE } from './const'

const FavoriteList = () => {
    const { showAlert } = useAlert()
    const [, allFavorites, , removeFavorites] = useFavorite()
    const [savedList, setSavedList] = useState<FavoriteItem[]>([])
    const [checkedItems, setCheckedItems] = useState<string[]>([])

    useEffect(() => {
        getList()
    }, [allFavorites])

    const getList = () => {
        setSavedList(allFavorites)
    }

    const handleCheckboxChange = (key: string) => {
        const isChecked = checkedItems.includes(key)
        if (!isChecked) {
            setCheckedItems([...checkedItems, key])
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== key))
        }
    }

    const handleRemoveFavorites = () => {
        !checkedItems.length &&
            showAlert(
                MESSAGE.EMPTY_SELECTION.TEXT,
                MESSAGE.EMPTY_SELECTION.TYPE as ALERT_SEVERITY
            )
        removeFavorites(checkedItems)
    }

    return (
        <Paper elevation={3} className={styles.sliderBox}>
            <Typography variant="h5" gutterBottom>
                {FAVORITE.TITLE}
            </Typography>
            <Paper>
                <div className={styles.listContainer}>
                    <div className={styles.listHeader}>
                        <div></div>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleRemoveFavorites()}
                        >
                            {FAVORITE.REMOVE_BUTTON}
                        </Button>
                    </div>
                    <ul className={styles.list}>
                        {savedList?.map((beer, index) => (
                            <li key={index.toString()}>
                                <Checkbox
                                    checked={checkedItems.includes(beer.key)}
                                    onChange={() =>
                                        handleCheckboxChange(beer.key)
                                    }
                                />
                                <Link
                                    component={RouterLink}
                                    to={`/beer/${beer.key}`}
                                >
                                    {beer.value as string}
                                </Link>
                            </li>
                        ))}
                        {!savedList.length && <p>{FAVORITE.EMPTY_LIST}</p>}
                    </ul>
                </div>
            </Paper>
        </Paper>
    )
}

export default FavoriteList
