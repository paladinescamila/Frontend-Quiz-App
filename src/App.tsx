import {HomePage} from './components/HomePage';
import {QuizPage} from './components/QuizPage';
import {ResultsPage} from './components/ResultsPage';
import {QUIZ_BY_ID} from './constants/quizes';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import {setPage} from './redux/pageSlice';
import {startQuiz, resetQuiz} from './redux/quizSlice';

export default function App() {
	const dispatch = useAppDispatch();
	const page = useAppSelector((state) => state.page.currentPage);
	const quizState = useAppSelector((state) => state.quiz);

	const handleStartQuiz = (quizID: QuizID) => {
		dispatch(startQuiz(QUIZ_BY_ID[quizID]));
		dispatch(setPage('quiz'));
	};

	const handlePlayAgain = () => {
		dispatch(resetQuiz());
		dispatch(setPage('home'));
	};

	return (
		<>
			{page === 'home' && <HomePage startQuiz={handleStartQuiz} />}
			{page === 'quiz' && quizState.currentQuiz && (
				<QuizPage
					title={quizState.currentQuiz.title}
					currentQuestionIndex={quizState.currentQuestionIndex}
					totalQuestions={quizState.currentQuiz.questions.length}
					question={quizState.currentQuiz.questions[quizState.currentQuestionIndex]}
				/>
			)}
			{page === 'results' && quizState.currentQuiz && (
				<ResultsPage
					title={quizState.currentQuiz.title}
					score={quizState.score}
					totalQuestions={quizState.currentQuiz.questions.length}
					onPlayAgain={handlePlayAgain}
				/>
			)}
		</>
	);
}
