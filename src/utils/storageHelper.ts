import { DATA_TYPES } from '../types'

const setLocatStorage = (key: string, value: DATA_TYPES) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocatStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string)
}

export { setLocatStorage, getLocatStorage }
