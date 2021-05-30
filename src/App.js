import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import home from "./components/pages/home/Home"
import Charts from "./components/pages/charts/charts"
import Map from "./components/pages/map/map"
import Labtest from "./components/pages/labtest/labtest"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/dashboard" component={home}/>
        <Route  path="/charts"component={Charts}/>
        <Route  path="/maps"component={Map}/>
        <Route  path="/labtest"component={Labtest}/>
      </Switch>
    </Router>
  )
}

export default App;
