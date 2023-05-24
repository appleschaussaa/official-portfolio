import * as React from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import Homepage from "./pages/Homepage";
import { Container, Box } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material";

function App() {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <Container 
                sx={{ minHeight: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
            // sx={{ margins: 2, height: "100%", width: "100%" }}
            >
                    <Header />
                    <Homepage />
                    <Footer />
            </Container>
            {/* </ThemeProvider> */}
        </>
    );
}

export default App;
