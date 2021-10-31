import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Auth = ({ user, children }) => {
  const history = useHistory()

  useEffect(() => {
    if (!user.isLoggedin) {
      history.replace('/')
    }
  }, [user])

  return <React.Fragment>{children}</React.Fragment>
}

export default Auth
