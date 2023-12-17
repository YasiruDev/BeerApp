import { getBeerList, getBeerMetaData } from '../../api'
import { ApiParams, Beer, IvalidateParams } from '../../types'
import handle from '../../utils/error'

const fetchData = (setData: (data: Array<Beer>) => void, params: ApiParams) => {
    ;(async () => {
        try {
            const filteredParams = removeEmptyValues(params as IvalidateParams)
            const response = await getBeerList(filteredParams)
            setData(response.data)
        } catch (error) {
            handle(error)
        }
    })()
}

const fetchMetaData = async (
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    params: ApiParams
) => {
    try {
        const filteredParams = removeEmptyValues(params as IvalidateParams)
        const response = await getBeerMetaData(filteredParams)
        setTotal(response.data?.total)
    } catch (error) {
        handle(error)
    }
}

const removeEmptyValues = (obj: IvalidateParams) => {
    const filteredParams: IvalidateParams = {}
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
            filteredParams[key] = obj[key]
        }
    }
    return filteredParams
}

export { fetchData, fetchMetaData }
