import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DRINKS_CODES } from '@/entities/DrinksList/model/constants';

type AppState = {
    selectedCocktail?: DRINKS_CODES;
};

const initialState: AppState = {
  selectedCocktail: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedCocktail: (state, action: PayloadAction<DRINKS_CODES>) => {
      state.selectedCocktail = action.payload;
    },
  },
  selectors: {
    getSelectedCocktail: (state) => state.selectedCocktail,
  },
});

export const { setSelectedCocktail } = appSlice.actions;
export const { getSelectedCocktail } = appSlice.selectors;
