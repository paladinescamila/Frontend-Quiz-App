import {useRef, useEffect} from 'react';
import {useAppDispatch} from '../redux/hooks';
import {submitAnswer, nextQuestion} from '../redux/quizSlice';
import {setPage} from '../redux/pageSlice';

interface QuizPageProps {
	title: string;
	currentQuestionIndex: number;
	totalQuestions: number;
	question: Question;
}

export function QuizPage({title, currentQuestionIndex, totalQuestions, question}: QuizPageProps) {
	const dispatch = useAppDispatch();
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		formRef.current?.reset();
	}, [currentQuestionIndex]);

	const handleSubmitAnswer = (answer: string) => {
		const isCorrect = answer === question.answer;
		dispatch(submitAnswer({answer, isCorrect}));

		if (currentQuestionIndex < totalQuestions - 1) {
			dispatch(nextQuestion());
		} else {
			dispatch(setPage('results'));
		}
	};

	return (
		<main>
			<header>
				<h1>{title}</h1>
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

						if (answer) handleSubmitAnswer(answer as string);
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

					<button type='submit'>Submit Answer</button>
				</form>
			</section>
		</main>
	);
}
