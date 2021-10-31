import { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/')
    }
  }, [loggedIn])

  return (
    <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
      {children}
    </AuthContext.Provider>
  )
}
