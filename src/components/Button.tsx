export default function Button({
	text,
	disabled,
	onClick,
}: {
	text: string;
	disabled?: boolean;
	onClick?: () => void;
}) {
	return (
		<button
			className='cursor-pointer disabled:cursor-not-allowed text-preset-4-mobile md:text-preset-4 text-white p-4 md:p-8 bg-purple-600 disabled:bg-purple-600/50 rounded-3xl w-full'
			type='button'
			disabled={disabled}
			onClick={onClick}>
			{text}
		</button>
	);
}
