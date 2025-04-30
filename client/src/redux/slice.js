import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
  products:null,

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export const { } = counterSlice.actions

export default counterSlice.reducer