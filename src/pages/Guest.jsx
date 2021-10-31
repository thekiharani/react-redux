import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Guest = ({ user, children }) => {
  const history = useHistory()
  useEffect(() => {
    if (user.isLoggedin) {
      history.goBack()
    }
  }, [user])

  return <React.Fragment>{children}</React.Fragment>
}

export default Guest
