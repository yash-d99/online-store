import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {myData:"hello World"},
  reducers: {
    loadData: (state, action) => {
 
        state.myData= action.payload.myData;
    },
  },
});

export const dataSlices = dataSlice.actions;
export default dataSlice.reducer;

