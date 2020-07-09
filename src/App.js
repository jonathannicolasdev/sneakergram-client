import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Home from './pages/Home'
import RegisterLogin from './pages/RegisterLogin'

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path='/'>
              {authenticated ? <Home /> : <RegisterLogin />}
            </Route>
          </Switch>

          <footer>
            <button onClick={() => setAuthenticated(!authenticated)}>
              Change Auth
            </button>
          </footer>
        </div>
      </Router>
    </Provider>
  )
}
