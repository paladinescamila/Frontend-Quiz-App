import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface QuizState {
	currentQuiz: Quiz | null;
	currentQuestionIndex: number;
	score: number;
	answerState: AnswerState;
}

const initialState: QuizState = {
	currentQuiz: null,
	currentQuestionIndex: 0,
	score: 0,
	answerState: 'none',
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		startQuiz: (state, action: PayloadAction<Quiz>) => {
			state.currentQuiz = action.payload;
			state.currentQuestionIndex = 0;
			state.score = 0;
			state.answerState = 'none';
		},
		submitAnswer: (
			state,
			action: PayloadAction<{answer: string; isCorrect: boolean; isSelected: boolean}>,
		) => {
			if (action.payload.isCorrect) {
				state.score += 1;
				state.answerState = 'correct';
			} else {
				state.answerState = 'incorrect';
			}
		},
		nextQuestion: (state) => {
			state.currentQuestionIndex += 1;
			state.answerState = 'none';
		},
		resetQuiz: (state) => {
			state.currentQuiz = null;
			state.currentQuestionIndex = 0;
			state.score = 0;
			state.answerState = 'none';
		},
	},
});

export const {startQuiz, submitAnswer, nextQuestion, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;
