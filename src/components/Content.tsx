import React from 'react';
import ThemeToggle from './ThemeToggle';
import SubjectIcon from './SubjectIcon';
import {QUIZES_BY_SUBJECT} from '../constants/quizes';

export default function Content({
	subject,
	children,
}: {
	subject?: Subject;
	children: React.ReactNode;
}) {
	return (
		<main className='flex flex-col gap-21 bg-grey-50 dark:bg-blue-900 px-6 xl:px-16 2xl:px-53 p-6 md:py-14 xl:py-24 background-light-mobile dark:background-dark-mobile md:background-light-tablet md:dark:background-dark-tablet lg:background-light-desktop lg:dark:background-dark-desktop w-screen h-screen'>
			<section className='flex flex-row items-center justify-between gap-4'>
				<div
					className={`flex flex-row gap-4 md:gap-6 items-center ${subject ? '' : 'opacity-0 pointer-events-none'}`}>
					<SubjectIcon subject={subject || 'html'} />
					<h1 className='text-preset-4-mobile md:text-preset-4 text-blue-900 dark:text-white'>
						{QUIZES_BY_SUBJECT[subject || 'html'].title}
					</h1>
				</div>
				<ThemeToggle />
			</section>
			<section className='grid grid-rows-[auto_1fr] lg:grid-cols-[456px_1fr] gap-10 md:gap-16 xl:gap-32'>
				{children}
			</section>
		</main>
	);
}
