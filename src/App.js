import * as React from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import Homepage from "./pages/Homepage";
import { Container } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material";


function App() {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                <Container sx={{ margins: 2, width:"lg" }}>
                    <Header />
                </Container>
                <Container sx={{ margins: 2, width:"lg", justifyContent: "normal", alignItems: "center" }}>
                    <Homepage />
                </Container>
                <Container
                    sx={{ width:"lg", justifyContent: "normal", alignItems: "center" }}
                >
                    <Footer />
                </Container>
            {/* </ThemeProvider> */}
        </>
    );
}

export default App;
