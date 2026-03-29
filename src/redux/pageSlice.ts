import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface PageState {
	currentPage: Page;
}

const initialState: PageState = {
	currentPage: 'home',
};

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<Page>) => {
			state.currentPage = action.payload;
		},
	},
});

export const {setPage} = pageSlice.actions;
export default pageSlice.reducer;
