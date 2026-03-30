import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getDefaultTheme} from '../utils/theme';

interface ThemeState {
	currentTheme: Theme;
}

const initialState: ThemeState = {
	currentTheme: getDefaultTheme(),
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.currentTheme = action.payload;
		},
		toggleTheme: (state) => {
			state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
		},
	},
});

export const {setTheme, toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
