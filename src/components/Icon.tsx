export default function Icon({
	icon,
	iconText,
	iconBackground,
	iconTextColor,
}: {
	icon?: string;
	iconText?: string;
	iconTextColor?: string;
	iconBackground?: string;
}) {
	return (
		<div
			className={`p-2 rounded-md md:rounded-xl lg:rounded-lg flex items-center justify-center w-10 h-10 md:w-14 md:h-14 ${iconBackground || 'bg-grey-50'}`}>
			{icon ? <img src={icon} className='w-7 h-7 md:w-10 md:h-10' /> : null}
			{iconText ? (
				<p className={`text-preset-4 ${iconTextColor || 'text-grey-500'}`}>{iconText}</p>
			) : null}
		</div>
	);
}
