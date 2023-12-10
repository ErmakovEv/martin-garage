import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import CATEGORIESMAP from '../../components/utils/utils';

export const activeButton = createSlice({
  name: 'activeButton',
  initialState: { activeButton: CATEGORIESMAP.none.name },
  reducers: {
    setButtonActive: (
      state,
      action: PayloadAction<keyof typeof CATEGORIESMAP>
    ) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setButtonActive } = activeButton.actions;

export default activeButton.reducer;
