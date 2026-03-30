export default function Card({
	text,
	onClick,
	className,
	leftComponent,
	rightComponent,
}: {
	text: string;
	onClick?: () => void;
	className?: string;
	leftComponent?: React.ReactNode;
	rightComponent?: React.ReactNode;
}) {
	return (
		<button
			className={`w-full p-4 md:p-6 flex flex-row gap-4 md:gap-8 items-center justify-start bg-white dark:bg-blue-850 rounded-xl md:rounded-4xl cursor-pointer custom-shadow-light dark:custom-shadow-dark ${className || ''}`}
			type='button'
			aria-label={text}
			onClick={(e) => {
				e.preventDefault();
				onClick?.();
			}}>
			{leftComponent}
			<h2 className='text-preset-4 text-blue-900 dark:text-white text-start flex-1'>
				{text}
			</h2>
			{rightComponent}
		</button>
	);
}
