import {useHandleState} from '../redux/useHandleState';
import Button from './Button';
import Content from './Content';
import SubjectIcon from './SubjectIcon';

export function ResultsPage() {
	const {quizState, handlePlayAgain} = useHandleState();

	if (!quizState.currentQuiz) return null;

	return (
		<Content subject={quizState.currentQuiz.id}>
			<header className='flex flex-col gap-2'>
				<h1 className='text-preset-2-light-mobile md:text-preset-2-light text-blue-900'>
					Quiz completed
				</h1>
				<p className='text-preset-2-mobile md:text-preset-2 text-blue-900'>You scored...</p>
			</header>

			<section aria-label='Quiz results' className='flex flex-col gap-8'>
				<article
					aria-label='Final score'
					className='flex flex-col gap-4 md:gap-10 items-center p-8 md:p-12 bg-white rounded-3xl custom-shadow'>
					<header className='flex flex-row items-center justify-center gap-4 md:gap-6'>
						<SubjectIcon subject={quizState.currentQuiz.id} />
						<h2 className='text-preset-4-mobile md:text-preset-4 text-blue-900'>
							{quizState.currentQuiz.title}
						</h2>
					</header>
					<div aria-live='polite' className='flex flex-col items-center gap-4'>
						<p className='text-preset-1-mobile md:text-preset-1 text-blue-900'>
							{quizState.score}
						</p>
						<p className='text-preset-4-mobile md:text-preset-5-regular text-grey-500'>
							out of {quizState.currentQuiz.questions.length}
						</p>
					</div>
				</article>

				<Button text='Play Again' onClick={handlePlayAgain} />
			</section>
		</Content>
	);
}
