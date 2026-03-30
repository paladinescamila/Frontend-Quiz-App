import Icon from './Icon';

export default function Card({
	icon,
	iconText,
	iconTextColor,
	iconBackground,
	className,
	text,
	onClick,
	rightComponent,
}: {
	icon?: string;
	iconText?: string;
	iconTextColor?: string;
	iconBackground?: string;
	className?: string;
	text: string;
	onClick?: () => void;
	rightComponent?: React.ReactNode;
}) {
	return (
		<div
			className={`p-4 md:p-6 flex flex-row gap-4 md:gap-8 items-center bg-white rounded-xl md:rounded-4xl cursor-pointer custom-shadow ${className || ''}`}
			onClick={(e) => {
				e.preventDefault();
				onClick?.();
			}}>
			<Icon
				icon={icon}
				iconText={iconText}
				iconTextColor={iconTextColor}
				iconBackground={iconBackground}
			/>
			<article className='flex-1'>
				<a>
					<h2 className='text-preset-4 text-blue-900'>{text}</h2>
				</a>
			</article>
			{rightComponent}
		</div>
	);
}
