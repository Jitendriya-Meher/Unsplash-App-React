import { configureStore } from '@reduxjs/toolkit'
import { imagesSlice } from './Slices/ImagesSlice'

export const store = configureStore({
  reducer: {
    images:imagesSlice.reducer
  },
})