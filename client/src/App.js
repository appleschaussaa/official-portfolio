import * as React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import { Header, Footer } from "./components/Route/index";
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
                        // width: "100vh",
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
        </>
    );
}

export default App;
