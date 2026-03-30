import {configureStore} from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import pageReducer from './pageSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
	reducer: {
		quiz: quizReducer,
		page: pageReducer,
		theme: themeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
