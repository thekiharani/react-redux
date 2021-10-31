import { createSlice } from '@reduxjs/toolkit'

const initalUserState = {
  name: '',
  age: 0,
  email: '',
  balance: 10,
  isLoggedin: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initalUserState,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },

    logout: (state) => {
      state.value = initalUserState
    },

    deposit: (state, action) => {
      state.value = {
        ...state.value,
        balance: state.value.balance + action.payload,
      }
    },

    withdraw: (state, action) => {
      state.value = {
        ...state.value,
        balance: state.value.balance - action.payload,
      }
    },
  },
})

export const { login, logout, deposit, withdraw } = userSlice.actions

export default userSlice.reducer
