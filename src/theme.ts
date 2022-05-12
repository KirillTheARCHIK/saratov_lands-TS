import { createTheme } from "@mui/material";
import interpolate from "color-interpolate";


export const theme = createTheme({
    palette: {
        primary: { main: '#18A7B5', },
        secondary: { main: interpolate(['#18A7B5', '#c0cccc'])(0.3) },
        background: { default: '#c0cccc' },
    },
    typography: {
        fontFamily: 'Roboto Condensed',
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        ':hover': {
                            color: '#000000',
                            backgroundColor: '#00000000',
                        },
                        color: '#555',
                        textTransform: 'none',
                        fontSize: 17,
                    },

                }
            ],
        }
    }
});