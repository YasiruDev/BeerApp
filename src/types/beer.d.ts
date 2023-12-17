import { DATA_TYPES, TYPE } from './'

interface Beer {
    id: string
    name: string
    brewery_type: TYPE
    address_1?: string
    address_2?: string
    address_3?: string
    city: string
    state_province: string
    postal_code: string
    country: string
    longitude: string
    latitude: string
    phone: string
    website_url: string
    state: string
    street: string
}

interface FavoriteItem {
    key: string
    value: DATA_TYPES
}

interface IsearchBoxProps {
    title: string
    data: { id: string; label: string }[]
    searchData: (params: ApiParams) => void
    handleOnclick: (value: string) => void
}

interface IBeerTableProps {
    list: Beer[]
    total: number
    page: number
    rowsPerPage: number
    setSearchBy: (param: ApiParams, value: string) => void
    setPage: (page: number) => void
    setRowsPerPage: (perPage: number) => void
}

export type { Beer, FavoriteItem, IsearchBoxProps, IBeerTableProps }
