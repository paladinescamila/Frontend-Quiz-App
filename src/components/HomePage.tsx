import {useHandleState} from '../redux/useHandleState';
import {QUIZES_BY_ID, QUIZES_IDS} from '../constants/quizes';
import {useMemo} from 'react';
import ThemeToggle from './ThemeToggle';

export function HomePage() {
	const {handleStartQuiz} = useHandleState();

	const bgByQuizID: Record<QuizID, string> = useMemo(
		() => ({
			html: 'bg-html',
			css: 'bg-css',
			javascript: 'bg-javascript',
			accessibility: 'bg-accessibility',
		}),
		[],
	);

	return (
		<main className='flex flex-col gap-25 bg-grey-50 px-6 md:px-16 xl:px-53 p-6 md:py-14 xl:py-24 background-light dark:background-dark w-screen h-screen'>
			<ThemeToggle />
			<section className='flex flex-col lg:flex-row justify-center gap-10 md:gap-16 lg:gap-32'>
				<header className='flex flex-col gap-12 w-116'>
					<h1 className='flex flex-col gap-2'>
						<span className='text-preset-2-light text-blue-900'>Welcome to the</span>
						<span className='text-preset-2 text-blue-900'>Frontend Quiz!</span>
					</h1>
					<p className='text-preset-6 text-grey-500 italic'>
						Pick a subject to get started.
					</p>
				</header>

				<section aria-label='Available quizzes' className='flex-1'>
					<ul className='flex flex-col gap-4 md:gap-6 lg:gap-4'>
						{QUIZES_IDS.map((quizID) => (
							<li className='p-4 md:p-6 flex flex-row gap-4 md:gap-8 items-center bg-white rounded-xl md:rounded-4xl cursor-pointer custom-shadow'>
								<div
									className={`p-2 rounded-md md:rounded-xl lg:rounded-lg ${bgByQuizID[quizID]}`}>
									<img
										src={QUIZES_BY_ID[quizID].icon}
										className='w-7 h-7 md:w-10 md:h-10'
									/>
								</div>
								<article>
									<a
										onClick={(e) => {
											e.preventDefault();
											handleStartQuiz(quizID);
										}}>
										<h2 className='text-preset-4 text-blue-900'>
											{QUIZES_BY_ID[quizID].title}
										</h2>
									</a>
								</article>
							</li>
						))}
					</ul>
				</section>
			</section>
		</main>
	);
}
