import { configureStore } from '@reduxjs/toolkit';
import worksSlice from './slices/worksSlice';
import activeButton from './slices/activeButton';
import swipeableEdgeDrawerSlice from './slices/swipeableEdgeDrawerSlice';

const store = configureStore({
  reducer: {
    worksSlice,
    activeButton,
    swipeableEdgeDrawerSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
