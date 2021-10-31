import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../features/user'
import Guest from './Guest'

const Login = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const history = useHistory()

  const [userData, setUserData] = useState({ name: '', age: 0, email: '' })

  const handleInput = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleLogin = () => {
    dispatch(
      login({
        ...userData,
        balance: user.balance,
        isLoggedin: true,
      })
    )

    history.replace('/profile')
  }
  return (
    <Guest>
      <div className="flex min-h-screen justify-center items-center">
        <div className="text-center space-y-2 max-w-sm bg-gray-100 text-gray-700 px-8 py-4 rounded-lg">
          <h1 className="text-xl font-bold">Login</h1>

          <hr className="my-3 text-gray-400" />

          <div>
            <input
              onChange={handleInput}
              value={userData.name}
              id="name"
              type="text"
              className="rounded-lg"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              onChange={handleInput}
              value={userData.email}
              id="email"
              type="email"
              className="rounded-lg"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              onChange={handleInput}
              value={userData.age}
              id="age"
              type="number"
              className="rounded-lg"
              min="1"
              placeholder="Age"
            />
          </div>

          <div className="space-x-2">
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Guest>
  )
}

export default Login
