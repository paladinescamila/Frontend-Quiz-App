import {useHandleState} from '../redux/useHandleState';
import Content from './Content';
import {OPTIONS_LETTERS} from '../constants/options-letters';
import Button from './Button';
import AnswerCard from './AnswerCard';
import CardList from './CardList';

export function QuizPage() {
	// State management
	const {
		quizState: {currentQuestionIndex, answer, currentQuiz},
		question,
		totalQuestions,
		handleSelectAnswer,
		handleSubmitAnswer,
		handleNextQuestion,
	} = useHandleState();

	// Reset form when question changes

	const onClickSubmit = () => {
		if (answer.state === 'none') handleSubmitAnswer();
		else handleNextQuestion();
	};

	if (!question) return null;

	return (
		<Content subject={currentQuiz?.id}>
			<section className='flex flex-col gap-6'>
				<p className='text-preset-5-mobile md:text-preset-6 text-grey-500 dark:text-blue-300'>
					Question {currentQuestionIndex + 1} of {totalQuestions}
				</p>
				<h2 className='text-preset-3-mobile md:text-preset-3 text-blue-900 dark:text-white'>
					{question.question}
				</h2>
				<div className='h-4 bg-white dark:bg-blue-850 mt-4 lg:mt-auto rounded-full p-1'>
					<div
						className='h-2 bg-purple-600 rounded-full'
						style={{width: `${(currentQuestionIndex / (totalQuestions - 1)) * 100}%`}}
					/>
				</div>
			</section>

			<section aria-label='Quiz question'>
				<form>
					<fieldset>
						<CardList>
							{question.options.map((option: string, index: number) => (
								<li key={`option-${index}`}>
									<AnswerCard
										letter={OPTIONS_LETTERS[index]}
										text={option}
										answer={answer}
										isSelected={answer.selected === option}
										onClick={() => handleSelectAnswer(option)}
									/>
								</li>
							))}
							<Button
								text={answer.state === 'none' ? 'Submit Answer' : 'Next Question'}
								onClick={onClickSubmit}
								disabled={answer.state === 'none' && !answer.selected}
							/>
						</CardList>
					</fieldset>
				</form>
			</section>
		</Content>
	);
}
