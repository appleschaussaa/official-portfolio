import * as React from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import Homepage from "./pages/Homepage";
import { Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

// const theme = createTheme({
//     breakpoints: {
//         values: {
//             mobile: 0,
//             tablet: 640,
//             laptop: 1024,
//             desktop: 1200,
//         },
//     },
// });

function App() {

    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{
                        minHeight: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Header />
                    <Homepage />
                    <Footer />
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
