import {HomePage} from './components/HomePage';
import {QuizPage} from './components/QuizPage';
import {ResultsPage} from './components/ResultsPage';
import {useHandlePage} from './redux/useHandlePage';

export default function App() {
	const {page} = useHandlePage();

	return (
		<>
			{page === 'home' && <HomePage />}
			{page === 'quiz' && <QuizPage />}
			{page === 'results' && <ResultsPage />}
		</>
	);
}
