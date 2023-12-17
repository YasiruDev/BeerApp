import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { IsearchBoxProps } from '../../types'

const Search: React.FC<IsearchBoxProps> = ({
    title,
    data,
    searchData,
    handleOnclick,
}) => {
    return (
        <>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Autocomplete
                options={data}
                onChange={(event, value) => handleOnclick(value?.id as string)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search by name..."
                        variant="outlined"
                        fullWidth
                        onChange={(e) =>
                            searchData({ by_name: e.target.value })
                        }
                    />
                )}
            />
        </>
    )
}

export default Search
