import {useMemo} from 'react';
import Card from './Card';
import CorrectIcon from '../assets/icon-correct.svg';
import ErrorIcon from '../assets/icon-error.svg';
import Icon from './Icon';

export default function AnswerCard({
	text,
	letter,
	answer,
	isSelected,
	onClick,
}: {
	text: string;
	letter: string;
	answer: Answer;
	isSelected: boolean;
	onClick?: () => void;
}) {
	const mode: 'selected' | 'correct' | 'incorrect' | 'none' = useMemo(() => {
		if (isSelected) {
			if (answer.state === 'correct' || answer.state === 'incorrect') return answer.state;
			else return 'selected';
		} else return 'none';
	}, [isSelected, answer.state]);

	return (
		<Card
			text={text}
			className={`border-3 ${mode === 'correct' ? 'border-green-500' : mode === 'incorrect' ? 'border-red-500' : mode === 'selected' ? 'border-purple-500' : 'border-transparent'}`}
			onClick={() => answer.state === 'none' && onClick?.()}
			leftComponent={
				<Icon
					text={letter}
					className={
						mode === 'correct'
							? 'bg-green-500'
							: mode === 'incorrect'
								? 'bg-red-500'
								: isSelected
									? 'bg-purple-500'
									: 'bg-grey-50'
					}
					textClassName={isSelected ? 'text-white' : ''}
				/>
			}
			rightComponent={
				mode === 'correct' || text === answer.correct ? (
					<img src={CorrectIcon} className='w-10 h-10' />
				) : mode === 'incorrect' && isSelected ? (
					<img src={ErrorIcon} className='w-10 h-10' />
				) : (
					<div className='w-10 h-10' />
				)
			}
		/>
	);
}
