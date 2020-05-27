import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Index from "./components/Layout/Index";
import { Provider } from "./Context";
import Lyrics from "./components/Tracks/Lyrics";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <React.Fragment>
          <Navbar headerName="Lyrics Finder" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
            <Navbar headerName="Sonu Shamra" />
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
