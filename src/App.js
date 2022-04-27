
import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../src/Components/Header&Footer/Footer";
import Header from "../src/Components/Header&Footer/Header";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routers from "./Components/routing/Routers";
import ScrollToTop from "./Components/routing/ScrollToTop";
import BackToTopButton from "../src/Components/BackToTopButton/BackToTopButton";


const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "3rem",
    },
  },
  palette: {
    primary: {
      main: "#143988",
      dark: "#143988",
      contrastText: "#fff",
    },
    secondary: {
      light: "#757CE8",
      main: "#3F50B5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={1}>
        <ThemeProvider theme={theme}>
          <Router>
            <Fragment>
               <ScrollToTop />
              <Header />
              {/* <Routers /> */}
              <BackToTopButton /> 
              <Footer />
            </Fragment>
          </Router>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}
export default App;
