import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: { value: 0 },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload
    },

    withdraw: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const { deposit, withdraw } = accountSlice.actions

export default accountSlice.reducer
