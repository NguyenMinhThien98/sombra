import {createSlice} from '@reduxjs/toolkit';
import {screens} from '../../Navigation/screens';

const {Home} = screens;
const initialState = {
  loading: false,
  success: undefined,
  error: undefined,
  data: undefined,
  count: 0,
};

const homeSlice = createSlice({
  name: Home.name,
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    
  },
});

export const {increment, decrement} = homeSlice.actions;
export default homeSlice.reducer;
