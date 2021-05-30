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
        <Route exact path="/saaf-water-dashboard/" component={home}/>
        <Route exact path="/" component={home}/>
        <Route exact path="/saaf-water-dashboard/dashboard" component={home}/>
        <Route  path="/saaf-water-dashboard/charts"component={Charts}/>
        <Route  path="/saaf-water-dashboard/maps"component={Map}/>
        <Route  path="/saaf-water-dashboard/labtest"component={Labtest}/>
      </Switch>
    </Router>
  )
}

export default App;
