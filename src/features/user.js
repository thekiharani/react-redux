import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: { name: '', age: 0, email: '', balance: 10, isLoggedin: false },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
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

export const { login, deposit, withdraw } = userSlice.actions

export default userSlice.reducer
