import React from 'react'
import axios from 'axios'

const { useState, useReducer, useEffect } = React

export const State = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="mx-4 my-4 bg-gray-200 max-w-lg px-8 py-4">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
        className="bg-green-700 py-1 px-4 text-white"
      >
        Couinter
      </button>
    </div>
  )
}

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }

    case 'TOGGLE_TEXT':
      return { ...state, showText: !state.showText }

    default:
      return state
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
  return (
    <div className="mx-4 my-4 bg-gray-200 max-w-lg px-8 py-4">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch('INCREMENT')
          dispatch('TOGGLE_TEXT')
        }}
        className="bg-green-700 py-1 px-4 text-white"
      >
        Reducer
      </button>

      {state.showText && <div>I am a Text</div>}
    </div>
  )
}

export const Effect = () => {
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(0)

  const numbers = [1, 2, 3, 4, 5, 6]

  const getUsers = async () => {
    if (refresh <= 5) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
      /* axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
       console.log(res.data);
     }) */
    } else {
      console.log(`Max queries reached! Please wait...`)
    }
  }

  const updateRefresh = (action = 'next') => {
    if (action === 'next' && refresh < numbers.length - 1) {
      setRefresh(refresh + 1)
    } else if (action === 'prev' && refresh > 0) {
      setRefresh(refresh - 1)
    } else {
      setRefresh(0)
    }
  }

  setTimeout(() => updateRefresh(), 3000)

  useEffect(() => {
    getUsers()
    return () => {
      setUsers([])
      setRefresh(0)
    }
  }, [])

  return (
    <div className="mx-4 my-4 bg-gray-200 max-w-lg px-8 py-4">
      <h1>Data</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>ZipCode: {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
            <p>
              Website:{' '}
              <a href={`http://${user.website}`} target="_blank">
                {user.website}
              </a>
            </p>
            <hr className="text-gray-400 my-2" />
          </div>
        )
      })}
      <button
        onClick={() => {
          setRefresh((prev) => prev + 1)
        }}
        className="bg-green-700 py-1 px-4 text-white"
      >
        Queries: {refresh}
      </button>

      <div className="flex space-x-2 my-2">
        <span className="bg-yellow-600 text-white px-2 py-1">
          Slide {numbers[refresh]} of {numbers.length}
        </span>
      </div>
    </div>
  )
}

const Hooks = () => {
  return (
    <div className="">
      <State />
      <Reducer />
      <Effect />
    </div>
  )
}

export default Hooks
