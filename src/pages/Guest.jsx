import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Guest = ({ children }) => {
  const history = useHistory()
  const user = useSelector((state) => state.user.value)
  useEffect(() => {
    if (user.isLoggedin) {
      history.goBack()
    }
  }, [user])

  return <React.Fragment>{children}</React.Fragment>
}

export default Guest
