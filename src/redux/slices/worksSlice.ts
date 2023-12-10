import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  worksList: string[];
};

const workList: string[] = [];

const initialState: initialStateType = { worksList: workList };

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<string>) => {
      if (state.worksList.indexOf(action.payload) !== -1) {
        state.worksList = state.worksList.filter(
          (item) => item !== action.payload
        );
        console.log('!@#');
      } else {
        state.worksList.push(action.payload);
      }
    },
    replaceList: (state, action: PayloadAction<string[]>) => {
      state.worksList = action.payload;
    },
  },
});

export const { changeList, replaceList } = worksSlice.actions;

export default worksSlice.reducer;
