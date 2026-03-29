import {useRef, useEffect} from 'react';
import {useHandleState} from '../redux/useHandleState';

export function QuizPage() {
	// State management
	const {
		quizState: {currentQuiz, currentQuestionIndex, answerState},
		question,
		totalQuestions,
		handleSubmitAnswer,
		handleNextQuestion,
	} = useHandleState();

	// Reset form when question changes
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		formRef.current?.reset();
	}, [currentQuestionIndex]);

	if (!question) return null;

	return (
		<main>
			<header>
				<h1>{currentQuiz?.title}</h1>
				<p>
					Question {currentQuestionIndex + 1} of {totalQuestions}
				</p>
			</header>

			<section aria-label='Quiz question'>
				<h2>{question.question}</h2>

				<form
					ref={formRef}
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(e.currentTarget);
						const answer = formData.get('answer');

						if (answerState === 'none') handleSubmitAnswer(answer as string);
						else if (answerState !== 'unanswered') handleNextQuestion();
					}}>
					<fieldset>
						<legend>Select an answer:</legend>

						<ul>
							{question.options.map((option: string, index: number) => (
								<li key={`option-${index}`}>
									<input
										type='radio'
										id={`option-${index}`}
										name='answer'
										value={option}
										required
									/>
									<label htmlFor={`option-${index}`}>{option}</label>
								</li>
							))}
						</ul>
					</fieldset>

					<button type='submit'>
						{answerState === 'none' ? 'Submit Answer' : 'Next Question'}
					</button>
				</form>
			</section>
		</main>
	);
}
