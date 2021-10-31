import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../features/user'
import Guest from './Guest'

const Login = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = () => {
    dispatch(
      login({
        name: 'Joe Gitonga',
        age: 27,
        email: 'thekiharani@gmail.com',
        balance: user.balance,
        isLoggedin: true,
      })
    )

    history.replace('/profile')
  }
  return (
    <Guest user={user}>
      <div className="flex min-h-screen justify-center items-center">
        <div className="text-center max-w-sm bg-gray-100 text-gray-700 px-8 py-4 rounded-lg">
          <h1 className="text-xl font-bold">Login</h1>

          <hr className="my-3 text-gray-400" />
          <span className="space-x-2">
            <button
              onClick={handleLogin}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </Guest>
  )
}

export default Login
