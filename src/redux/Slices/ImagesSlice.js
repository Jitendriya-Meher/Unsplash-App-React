import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showImages: [],
  error:false,
  showPage:2,
  value:''
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state,action) => {

        state.showImages = [...action.payload];
        state.showPage = 2;
    },
    moreImages: (state,action) => {
        state.showImages = [...state.showImages, ...action.payload];
        state.showPage++;
    },
    setLoading: (state,action) => {
        state.loading = action.payload;
    },
    setValue: (state,action) => {
        state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages, moreImages, setLoading,setValue } = imagesSlice.actions

export default imagesSlice.reducer