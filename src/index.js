import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider, createTheme } from "@mui/material";

// const theme = createTheme({
//     palette: {
//         mode: "light",
//         primary: {
//             main: "#25347d",
//         },
//         secondary: {
//             main: "#f50057",
//         },
//         background: {
//             default: "#73797d",
//             paper: "#ffffff",
//         },
//     },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
