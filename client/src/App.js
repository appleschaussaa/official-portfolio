import * as React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import { Header, Footer } from "./components/Route/index";
import Homepage from "./pages/Homepage/Homepage";
import { Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import {
//     MemoryRouter,
//     Route,
//     Routes,
//     Link,
//     matchPath,
//     useLocation,
//   } from "react-router-dom";
//   import { StaticRouter } from "react-router-dom/server";

const theme = createTheme({
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
});

// theme.typography.h3 = {
//     fontSize: "1.2rem",
//     "@media (min-width:600px)": {
//         fontSize: "1.5rem",
//     },
//     [theme.breakpoints.up("md")]: {
//         fontSize: "2.4rem",
//     },
// };

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <Container
                        sx={{
                            minHeight: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            // backgroundColor: "#DCDCDC",
                            backgroundColor: "#FDF5E6",
                            // backgroundColor: "#FAFAFA",
                            fontFamily: "Roboto Slab Bold",
                        }}
                    >
                        <Header />
                        <Homepage />
                        <Footer />
                    </Container>
                </ThemeProvider>
            </ApolloProvider>
        </>
    );
}

export default App;
