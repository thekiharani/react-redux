import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deposit, withdraw } from '../features/user'
import Auth from './Auth'

const Account = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  const handleDeposit = () => {
    dispatch(deposit(1500))
  }

  const handleWithdraw = () => {
    dispatch(withdraw(500))
  }

  return (
    <Auth>
      <div className="flex min-h-screen justify-center items-center">
        <div className="text-center max-w-sm bg-gray-100 text-gray-700 px-8 py-4 rounded-lg">
          <h1 className="text-xl font-bold">Balance: {user.balance}</h1>

          <hr className="my-3 text-gray-400" />
          <span className="space-x-2">
            <button
              onClick={handleDeposit}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Deposit
            </button>
            <button
              onClick={handleWithdraw}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Withdraw
            </button>
          </span>
        </div>
      </div>
    </Auth>
  )
}

export default Account
