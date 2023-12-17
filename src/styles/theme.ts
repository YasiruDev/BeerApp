import { createTheme } from '@mui/material/styles'
import { green, blue, yellow } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: yellow[800],
        },
        secondary: {
            main: green[500],
        },
        success: {
            main: green[500],
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
        },
    },
})

export { theme }
