import {useHandleState} from '../redux/useHandleState';
import {QUIZES_BY_SUBJECT, SUBJECTS} from '../constants/quizes';
import Content from './Content';
import Card from './Card';
import CardList from './CardList';
import SubjectIcon from './SubjectIcon';

export function HomePage() {
	const {handleStartQuiz} = useHandleState();

	return (
		<Content>
			<header className='flex flex-col gap-12'>
				<h1 className='flex flex-col gap-2'>
					<span className='text-preset-2-light-mobile md:text-preset-2-light text-blue-900'>
						Welcome to the
					</span>
					<span className='text-preset-2-mobile md:text-preset-2 text-blue-900'>
						Frontend Quiz!
					</span>
				</h1>
				<p className='text-preset-5-mobile md:text-preset-6 text-grey-500'>
					Pick a subject to get started.
				</p>
			</header>

			<section aria-label='Available quizzes'>
				<CardList>
					{SUBJECTS.map((subject) => (
						<li>
							<Card
								text={QUIZES_BY_SUBJECT[subject].title}
								onClick={() => handleStartQuiz(subject)}
								leftComponent={<SubjectIcon subject={subject} />}
							/>
						</li>
					))}
				</CardList>
			</section>
		</Content>
	);
}
