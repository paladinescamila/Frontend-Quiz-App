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
			className='cursor-pointer disabled:cursor-not-allowed text-preset-4-mobile md:text-preset-4 text-white p-4 md:p-8 bg-purple-600 rounded-xl md:rounded-3xl w-full relative group'
			type='button'
			aria-label={text}
			disabled={disabled}
			onClick={onClick}>
			<span className='absolute inset-0 group-disabled:bg-white/50 rounded-xl md:rounded-3xl' />
			{text}
		</button>
	);
}
