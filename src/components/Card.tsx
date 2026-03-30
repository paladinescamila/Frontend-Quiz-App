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
		<div
			className={`p-4 md:p-6 flex flex-row gap-4 md:gap-8 items-center bg-white rounded-xl md:rounded-4xl cursor-pointer custom-shadow transition-colors duration-300 ${className || ''}`}
			onClick={(e) => {
				e.preventDefault();
				onClick?.();
			}}>
			{leftComponent}
			<article className='flex-1'>
				<a>
					<h2 className='text-preset-4 text-blue-900'>{text}</h2>
				</a>
			</article>
			{rightComponent}
		</div>
	);
}
