import React from "react";
import Nav from "../src/Component/Nav/Nav";
// import Homepage from '../src/Component/Homepage/Homepage'
import Homedetail from "../src/Component/Homepage/Homedetail";
import Homepage from "../src/Page/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favourite from "./Component/Favourite/Favourite";
import { GlobalProvider } from "../src/Component/context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/home/:id" component={Homedetail} />

            <Route path="/Favourite" exact component={Favourite} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
