import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import Account from './pages/Account'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <AuthProvider>
      <nav className="flex space-x-2 bg-gray-200 px-8 py-4">
        <Link className="bg-gray-100 px-4 py-2 rounded-lg" to="/">
          Home
        </Link>

        <Link className="bg-gray-100 px-4 py-2 rounded-lg" to="/account">
          Account
        </Link>

        <Link className="bg-gray-100 px-4 py-2 rounded-lg" to="/profile">
          Profile
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route
          exact
          path="/account"
          render={(props) => <Account {...props} />}
        />

        <Route
          exact
          path="/profile"
          render={(props) => <Profile {...props} />}
        />

        <Redirect to="/" />
      </Switch>
    </AuthProvider>
  )
}

export default ({ contentParams }) => <App contentParams={contentParams} />
