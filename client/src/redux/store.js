import { configureStore } from '@reduxjs/toolkit'
import state from './slice';
export const store = configureStore({
  reducer: {
    state
   },
})