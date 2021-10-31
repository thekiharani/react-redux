import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import accountActionCreators from './state/action-creators/account'

const App = () => {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(
    accountActionCreators,
    dispatch
  )

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="text-center max-w-sm bg-gray-100 text-gray-700 px-8 py-4 rounded-lg">
        <h1 className="text-xl font-bold">Balance: {account}</h1>

        <hr className="my-3 text-gray-400" />
        <span className="space-x-2">
          <button onClick={() => depositMoney(1500)} className="bg-green-600 text-white px-4 py-2 rounded-lg">Deposit</button>
          <button onClick={() => withdrawMoney(500)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Withdraw</button>
        </span>
      </div>
    </div>
  )
}

export default App
