import {HomePage} from './components/HomePage';
import {QuizPage} from './components/QuizPage';
import {ResultsPage} from './components/ResultsPage';
import {useHandleState} from './redux/useHandleState';

export default function App() {
	const {page} = useHandleState();

	return (
		<>
			{page === 'home' && <HomePage />}
			{page === 'quiz' && <QuizPage />}
			{page === 'results' && <ResultsPage />}
		</>
	);
}
