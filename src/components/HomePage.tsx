import {useHandleState} from '../redux/useHandleState';

export function HomePage() {
	const {handleStartQuiz} = useHandleState();

	return (
		<main>
			<header>
				<h1>Welcome to the Frontend Quiz!</h1>
				<p>Pick a subject to get started.</p>
			</header>

			<section aria-label='Available quizzes'>
				<ul>
					<li>
						<article>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleStartQuiz('html');
								}}>
								<h2>HTML</h2>
							</a>
						</article>
					</li>
					<li>
						<article>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleStartQuiz('css');
								}}>
								<h2>CSS</h2>
							</a>
						</article>
					</li>
					<li>
						<article>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleStartQuiz('javascript');
								}}>
								<h2>Javascript</h2>
							</a>
						</article>
					</li>
					<li>
						<article>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleStartQuiz('accessibility');
								}}>
								<h2>Accessibility</h2>
							</a>
						</article>
					</li>
				</ul>
			</section>
		</main>
	);
}
