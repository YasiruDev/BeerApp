import { ApiParams, Beer, TYPE } from '../../types'

type Tcolumn = {
    id: keyof Beer
    label: string
    dropdownOptions?: TYPE[]
    filterBy: keyof ApiParams
}[]
const TYPES: TYPE[] = [
    'micro',
    'nano',
    'regional',
    'brewpub',
    'large',
    'planning',
    'bar',
    'contract',
    'proprietor',
    'closed',
]
export const columns: Tcolumn = [
    { id: 'name', label: 'Name', filterBy: 'by_name' },
    { id: 'country', label: 'Country', filterBy: 'by_country' },
    {
        id: 'brewery_type',
        label: 'Type',
        filterBy: 'by_type',
        dropdownOptions: TYPES,
    },
]
