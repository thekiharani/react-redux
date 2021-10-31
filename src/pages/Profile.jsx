import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../features/user'
import Auth from './Auth'

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logout())
    history.replace('/')
  }

  return (
    <Auth>
      <div className="flex min-h-screen justify-center items-center">
        <div className="text-center max-w-sm bg-gray-100 text-gray-700 px-8 py-4 rounded-lg">
          <h1 className="text-xl font-bold">Profile Page</h1>

          <hr className="my-3 text-gray-400" />
          <div className="text-left">
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Balance: {user.balance}</p>
          </div>

          <hr className="my-3 text-gray-400" />
          <span className="space-x-2">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </span>
        </div>
      </div>
    </Auth>
  )
}

export default Profile
