export function HomePage({startQuiz}: {startQuiz: (quizID: QuizID) => void}) {
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
									startQuiz('html');
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
									startQuiz('css');
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
									startQuiz('javascript');
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
									startQuiz('accessibility');
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
