import { useEffect, useState } from 'react'
import { DATA_TYPES, FavoriteItem } from '../types'
import { TXT, getLocatStorage, setLocatStorage } from '../utils'

export const useFavorite = () => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([])

    useEffect(() => {
        const storedFavorites = getLocatStorage(TXT.FAV_STORAGE)
        storedFavorites && setFavorites(storedFavorites)
    }, [])

    const favorite = (key?: string) => {
        const favoriteItem = favorites.find((item) => item.key === key)
        return favoriteItem?.value
    }

    const allFavorites = (): FavoriteItem[] => {
        return favorites
    }

    const setFavorite = (key: string, value: DATA_TYPES) => {
        const { existingFavoriteIndex, existingFavorites } =
            _getExistingFavorites(key)

        if (existingFavoriteIndex !== -1) {
            existingFavorites.splice(existingFavoriteIndex, 1)
        } else {
            existingFavorites.push({ key, value })
        }
        setLocatStorage(TXT.FAV_STORAGE, existingFavorites)
        setFavorites(existingFavorites)
    }

    const removeFavorites = (keys: string[]) => {
        let existingFavorites = [...favorites]
        keys.forEach((key) => {
            existingFavorites = existingFavorites.filter(
                (item) => item.key !== key
            )
        })
        setLocatStorage(TXT.FAV_STORAGE, existingFavorites)
        setFavorites(existingFavorites)
    }

    const _getExistingFavorites = (key: string) => {
        const existingFavorites = [...favorites]
        const existingFavoriteIndex = existingFavorites.findIndex(
            (item) => item.key === key
        )
        return { existingFavorites, existingFavoriteIndex }
    }

    return [favorite, allFavorites, setFavorite, removeFavorites] as const
}
