import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface QuizState {
	currentQuiz: Quiz | null;
	currentQuestionIndex: number;
	score: number;
	userAnswers: string[];
}

const initialState: QuizState = {
	currentQuiz: null,
	currentQuestionIndex: 0,
	score: 0,
	userAnswers: [],
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		startQuiz: (state, action: PayloadAction<Quiz>) => {
			state.currentQuiz = action.payload;
			state.currentQuestionIndex = 0;
			state.score = 0;
			state.userAnswers = [];
		},
		submitAnswer: (state, action: PayloadAction<{answer: string; isCorrect: boolean}>) => {
			state.userAnswers.push(action.payload.answer);

			if (action.payload.isCorrect) {
				state.score += 1;
			}
		},
		nextQuestion: (state) => {
			state.currentQuestionIndex += 1;
		},
		resetQuiz: (state) => {
			state.currentQuiz = null;
			state.currentQuestionIndex = 0;
			state.score = 0;
			state.userAnswers = [];
		},
	},
});

export const {startQuiz, submitAnswer, nextQuestion, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;
