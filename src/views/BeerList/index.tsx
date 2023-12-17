import { useEffect, useState } from 'react'
import { ApiParams, Beer } from '../../types'
import { fetchData, fetchMetaData } from './utils'
import { useNavigate } from 'react-router-dom'
import BeerTable from './BeerTable'
import Progress from '../../components/Progress'

const BeerList = () => {
    const navigate = useNavigate()
    const [total, setTotal] = useState<number>(0)
    const [beerList, setBeerList] = useState<Array<Beer>>([])
    const [params, setParams] = useState<ApiParams>({ page: 0, per_page: 10 })

    // eslint-disable-next-line

    useEffect(() => {
        fetchData(setBeerList, {
            ...params,
        })
        fetchMetaData(setTotal, {
            ...params,
        })
    }, [params])
    const onBeerClick = (id: string) => navigate(`/beer/${id}`)

    const setSearchBy = (param: keyof ApiParams, value: string) => {
        setParams({ ...params, [param]: value })
    }

    const setPage = (page: number) => {
        setParams({
            ...params,
            page,
        })
    }

    const setRowsPerPage = (perPage: number) => {
        setParams({
            ...params,
            per_page: perPage,
        })
    }

    return (
        <article>
            <section>
                <header>
                    <h1>BeerList page</h1>
                </header>
                <main>
                    {beerList && beerList?.length ? (
                        <BeerTable
                            list={beerList}
                            setSearchBy={setSearchBy}
                            total={total}
                            page={params.page as number}
                            rowsPerPage={params.per_page as number}
                            setPage={setPage}
                            setRowsPerPage={setRowsPerPage}
                        />
                    ) : (
                        <Progress />
                    )}
                </main>
            </section>
        </article>
    )
}

export default BeerList
