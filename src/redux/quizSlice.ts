import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface QuizState {
	currentQuiz: Quiz | null;
	currentQuestionIndex: number;
	score: number;
	answer: {correct: string | null; selected: string | null; state: AnswerState};
}

const initialState: QuizState = {
	currentQuiz: null,
	currentQuestionIndex: 0,
	score: 0,
	answer: {correct: null, selected: null, state: 'none'},
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		startQuiz: (state, action: PayloadAction<Quiz>) => {
			state.currentQuiz = action.payload;
			state.currentQuestionIndex = 0;
			state.score = 0;

			state.answer = {correct: null, selected: null, state: 'none'};
		},
		selectAnswer: (state, action: PayloadAction<string>) => {
			state.answer.selected = action.payload;
		},
		submitAnswer: (
			state,
			action: PayloadAction<{selected: string | null; correct: string}>,
		) => {
			const {selected, correct} = action.payload;

			state.answer = {
				correct,
				selected,
				state: selected === correct ? 'correct' : 'incorrect',
			};

			if (selected === correct) state.score += 1;
		},
		nextQuestion: (state) => {
			state.currentQuestionIndex += 1;
			state.answer = {correct: null, selected: null, state: 'none'};
		},
		resetQuiz: (state) => {
			state.currentQuiz = null;
			state.currentQuestionIndex = 0;
			state.score = 0;
			state.answer = {correct: null, selected: null, state: 'none'};
		},
	},
});

export const {startQuiz, selectAnswer, submitAnswer, nextQuestion, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;
