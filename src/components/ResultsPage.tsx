interface ResultsPageProps {
	title: string;
	score: number;
	totalQuestions: number;
	onPlayAgain: () => void;
}

export function ResultsPage({title, score, totalQuestions, onPlayAgain}: ResultsPageProps) {
	return (
		<main>
			<section aria-label='Quiz results'>
				<header>
					<h1>Quiz completed</h1>
					<p>You scored...</p>
				</header>

				<article aria-label='Final score'>
					<header>
						<h2>{title}</h2>
					</header>
					<div aria-live='polite'>
						<p>
							<strong>{score}</strong> out of {totalQuestions}
						</p>
					</div>
				</article>

				<button onClick={onPlayAgain}>Play Again</button>
			</section>
		</main>
	);
}
