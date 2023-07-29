import * as React from "react";
// import PropTypes from 'prop-types';
import "./App.css";
import { Header, Footer } from "./components/index";
import Homepage from "./pages/Homepage/Homepage";
import { Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import {
//     MemoryRouter,
//     Route,
//     Routes,
//     Link,
//     matchPath,
//     useLocation,
//   } from 'react-router-dom';
//   import { StaticRouter } from 'react-router-dom/server';


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
    // palette: {
    //     mode: "dark",
    // label: "black",
    // },
});

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

// const Router = (props) => {
//     const { children } = props;
//     if (typeof window === "undifined") {
//         return <StaticRouter location="/draft">{children}</StaticRouter>
//     };
//     return (
//         <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
//           {children}
//         </MemoryRouter>
//       );
// }

// Router.propTypes = {
//     children: PropTypes.node,
//   };

//   const ProperRoute = (patterns) => {
//     const { pathname } = useLocation();
  
//     for (let i = 0; i < patterns.length; i += 1) {
//       const pattern = patterns[i];
//       const possibleMatch = matchPath(pattern, pathname);
//       if (possibleMatch !== null) {
//         return possibleMatch;
//       }
//     }
  
//     return null;
//   }



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
