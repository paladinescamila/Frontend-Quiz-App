export default function Icon({
	icon,
	text,
	className,
	textClassName,
}: {
	icon?: string;
	text?: string;
	className?: string;
	textClassName?: string;
}) {
	return (
		<span
			className={`p-2 rounded-md md:rounded-xl lg:rounded-lg flex items-center justify-center w-10 h-10 md:w-14 md:h-14 ${className || ''}`}>
			{icon ? (
				<img src={icon} className='w-7 h-7 md:w-10 md:h-10' alt={text || 'Icon'} />
			) : null}
			{text ? (
				<span className={`text-preset-4 text-grey-500 ${textClassName || ''}`}>{text}</span>
			) : null}
		</span>
	);
}
