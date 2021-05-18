import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'modules/common/containers/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
export default Routes
