import {useMemo} from 'react';
import {QUIZES_BY_ID} from '../constants/quizes';
import {useAppDispatch, useAppSelector} from './hooks';
import {setPage} from './pageSlice';
import {startQuiz, resetQuiz, submitAnswer, nextQuestion} from './quizSlice';

export const useHandleState = () => {
	const dispatch = useAppDispatch();

	const page = useAppSelector((state) => state.page.currentPage);
	const quizState = useAppSelector((state) => state.quiz);

	const question = useMemo(
		() => quizState.currentQuiz?.questions[quizState.currentQuestionIndex],
		[quizState.currentQuiz, quizState.currentQuestionIndex],
	);

	const totalQuestions = useMemo(
		() => quizState.currentQuiz?.questions.length || 0,
		[quizState.currentQuiz],
	);

	const handleStartQuiz = (quizID: QuizID) => {
		dispatch(startQuiz(QUIZES_BY_ID[quizID]));
		dispatch(setPage('quiz'));
	};

	const handlePlayAgain = () => {
		dispatch(resetQuiz());
		dispatch(setPage('home'));
	};

	const handleSubmitAnswer = (answer: string) => {
		if (!quizState.currentQuiz || !question) return;

		const isCorrect = answer === question.answer;
		dispatch(submitAnswer({answer, isCorrect, isSelected: answer !== ''}));
	};

	const handleNextQuestion = () => {
		if (quizState.currentQuestionIndex < totalQuestions - 1) {
			dispatch(nextQuestion());
		} else {
			dispatch(setPage('results'));
		}
	};

	return {
		page,
		quizState,
		question,
		totalQuestions,
		handleStartQuiz,
		handlePlayAgain,
		handleSubmitAnswer,
		handleNextQuestion,
	};
};
