import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination'
import { useNavigate } from 'react-router-dom'
import { IBeerTableProps } from '../../types'
import { columns } from './const'

const BeerTable: React.FC<IBeerTableProps> = ({
    list,
    setSearchBy,
    total,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
}) => {
    const navigate = useNavigate()

    const renderColumns = (): JSX.Element[] => {
        return columns.map(({ id, label, dropdownOptions, filterBy }) => {
            return (
                <TableCell key={id}>
                    {id === 'brewery_type' ? (
                        <>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                            >
                                <InputLabel>Type</InputLabel>
                                <Select
                                    onChange={(e) =>
                                        setSearchBy(
                                            filterBy,
                                            e.target.value as string
                                        )
                                    }
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {dropdownOptions?.map((option) => {
                                        return (
                                            <MenuItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </>
                    ) : (
                        <TextField
                            label={label}
                            variant="standard"
                            onChange={(e) =>
                                setSearchBy(filterBy, e.target.value as string)
                            }
                        ></TextField>
                    )}
                </TableCell>
            )
        })
    }

    const renderBeerList = (): JSX.Element[] => {
        return list.map((row) => {
            return (
                <TableRow
                    key={row.id}
                    sx={{
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate(`/beer/${row.id}`)}
                >
                    {columns.map(({ id }) => {
                        return <TableCell key={id}>{row[id]}</TableCell>
                    })}
                </TableRow>
            )
        })
    }

    return (
        <Box>
            <TableContainer
                sx={{
                    maxHeight: 600,
                }}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>{renderColumns()}</TableRow>
                    </TableHead>
                    <TableBody>{renderBeerList()}</TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={total}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(event: unknown, newPage: number) =>
                    setPage(newPage)
                }
                onRowsPerPageChange={(e) =>
                    setRowsPerPage(parseInt(e.target.value))
                }
            />
        </Box>
    )
}

export default BeerTable
