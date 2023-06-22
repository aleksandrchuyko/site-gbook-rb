import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const visitorlistSlice = createSlice({
  name: 'visitorlist',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = visitorlistSlice.actions;

export const visitorlistReducer = visitorlistSlice.reducer;

//selectors
export const getFilter = state => state.visitorlist.filter;
