import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Content from "./components/core/Content"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Membership from "./components/Membership"
import Main from "./components/core/Main.jsx"
import Snap from "./components/questions/snap"
import Random from "./components/questions/random"
import Category from "./components/Category"
import { PayPalButton } from "react-paypal-button-v2"

class Routes extends Component {

  render() {
    return (
      <Switch >
        <Route exact path="/" component={Content} />
        <Route path="/home" component={Home} />
        <Route path="/membership" component={Membership} />
        <Route path="/randomquiz" component={Main} />
        <Route path="/snap-question" component={Snap} />
        <Route path="/category/:handle" component={Category} />
        <Route path="/random-question" component={Random} />
        <Route path='/quiz/category/:handle' component={Main} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}
export default Routes