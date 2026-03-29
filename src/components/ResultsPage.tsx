import {useHandleState} from '../redux/useHandleState';

export function ResultsPage() {
	const {quizState, handlePlayAgain} = useHandleState();

	if (!quizState.currentQuiz) return null;

	return (
		<main>
			<section aria-label='Quiz results'>
				<header>
					<h1>Quiz completed</h1>
					<p>You scored...</p>
				</header>

				<article aria-label='Final score'>
					<header>
						<h2>{quizState.currentQuiz.title}</h2>
					</header>
					<div aria-live='polite'>
						<p>
							<strong>{quizState.score}</strong> out of{' '}
							{quizState.currentQuiz.questions.length}
						</p>
					</div>
				</article>

				<button onClick={handlePlayAgain}>Play Again</button>
			</section>
		</main>
	);
}
