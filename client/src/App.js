import * as React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import { Header, Footer } from "./components/Index/index";
import Homepage from "./pages/Homepage/Homepage";
import { Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/Theme";

// theme.typography.h3 = {
    // fontSize: "1.2rem",
    // "@media (min-width:600px)": {
    //     fontSize: "1.5rem",
    // },
    // [theme.breakpoints("md")]: {
    //     fontSize: "2.4rem",
    // },
// };

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{
                        minHeight: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#fceed4",
                        // backgroundColor: "#FDF5E6",
                        // backgroundColor: "#fbecce",
                        // backgroundColor: "#FAFAFA",
                        fontFamily: "Roboto Slab Bold",
                        m:0
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
