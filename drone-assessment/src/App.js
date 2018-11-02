import React from "react";
import { Router, Link, Route } from "react-router-dom";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import { history } from "./helper/history";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NowWhat from "./components/NowWhat";
import Weather from "./components/Weather";
import MapView from "./components/MapView";

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Wrapper>
            <Header />
            
            <Route exact path="/map" component={MapView} />
            {/* <NowWhat /> */}
            <ToastContainer />
          </Wrapper>
          <div>
         

          </div>
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
