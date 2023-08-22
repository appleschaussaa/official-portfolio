import { createTheme } from "@mui/material";

const theme = () => createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
            // xs: 0,
            // sm: 600,
            // md: 900,
            // lg: 1200,
            // xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    //   fontSize:
                },
            },
        },
    },
    typography: {
        fontFamily: ["Roboto Slab"].join(","),
        // h3: {
        //     fontSize: "1.2rem",
        //     "@media (min-width:600px)": {
        //         fontSize: "1.5rem",
        //     },
        //     [theme.breakpoints.up("md")]: {
        //         fontSize: "2.4rem",
        //     },
        // },
    },
    palette: {
        primary: {
          main: "#483D8B", // Customize the primary color
        },
        backgroundColor: {
        //   default: "#FDF5E6", // Customize the default background color
          default: "#3A7575",
          paper: "#ffffff", // Customize the background color for paper components
        //   paper: "#ffffff",
        }}
});

export default theme;