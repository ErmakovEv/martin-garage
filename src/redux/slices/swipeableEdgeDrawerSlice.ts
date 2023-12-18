import { createSlice } from '@reduxjs/toolkit';

export const swipeableEdgeDrawerSlice = createSlice({
  name: 'swipeableEdgeDrawer',
  initialState: { isOpen: false },
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDrawer } = swipeableEdgeDrawerSlice.actions;

export default swipeableEdgeDrawerSlice.reducer;
