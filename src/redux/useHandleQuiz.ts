import {useMemo} from 'react';
import {QUIZES_BY_SUBJECT} from '../constants/quizes';
import {useAppDispatch, useAppSelector} from './hooks';
import {setPage} from './pageSlice';
import {startQuiz, resetQuiz, selectAnswer, submitAnswer, nextQuestion} from './quizSlice';

export const useHandleQuiz = () => {
	const dispatch = useAppDispatch();

	const quizState = useAppSelector((state) => state.quiz);
	const answer = useAppSelector((state) => state.quiz.answer);

	const question = useMemo(
		() => quizState.currentQuiz?.questions[quizState.currentQuestionIndex],
		[quizState.currentQuiz, quizState.currentQuestionIndex],
	);

	const totalQuestions = useMemo(
		() => quizState.currentQuiz?.questions.length || 0,
		[quizState.currentQuiz],
	);

	const handleStartQuiz = (subject: Subject) => {
		dispatch(startQuiz(QUIZES_BY_SUBJECT[subject]));
		dispatch(setPage('quiz'));
	};

	const handlePlayAgain = () => {
		dispatch(resetQuiz());
		dispatch(setPage('home'));
	};

	const handleSelectAnswer = (answer: string) => {
		dispatch(selectAnswer(answer));
	};

	const handleSubmitAnswer = () => {
		if (!quizState.currentQuiz || !question) return;

		dispatch(submitAnswer({selected: answer.selected, correct: question.answer}));
	};

	const handleNextQuestion = () => {
		if (quizState.currentQuestionIndex < totalQuestions - 1) {
			dispatch(nextQuestion());
		} else {
			dispatch(setPage('results'));
		}
	};

	return {
		quizState,
		question,
		totalQuestions,
		handleStartQuiz,
		handlePlayAgain,
		handleSelectAnswer,
		handleSubmitAnswer,
		handleNextQuestion,
	};
};
