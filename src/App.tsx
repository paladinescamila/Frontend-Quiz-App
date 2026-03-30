import {HomePage} from './components/HomePage';
import {QuizPage} from './components/QuizPage';
import {ResultsPage} from './components/ResultsPage';
import {useHandleQuiz} from './redux/useHandleQuiz';

export default function App() {
	const {page} = useHandleQuiz();

	return (
		<>
			{page === 'home' && <HomePage />}
			{page === 'quiz' && <QuizPage />}
			{page === 'results' && <ResultsPage />}
		</>
	);
}
