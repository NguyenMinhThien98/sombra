import {createSlice} from '@reduxjs/toolkit';
import {screens} from '../../Navigation/screens';

const {Home} = screens;
const initialState = {
  value: 0,
};

const homeSlice = createSlice({
  name: Home.name,
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },

    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = homeSlice.actions;
export default homeSlice.reducer;
