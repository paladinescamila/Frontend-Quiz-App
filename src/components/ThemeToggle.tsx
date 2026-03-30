// import MoonLightIcon from '../assets/icon-moon-light.svg';
import MoonDarkIcon from '../assets/icon-moon-dark.svg';
// import SunLightIcon from '../assets/icon-sun-light.svg';
import SunDarkIcon from '../assets/icon-sun-dark.svg';

export default function ThemeToggle() {
	return (
		<div className='flex flex-row gap-4 ml-auto'>
			<img src={SunDarkIcon} alt='Sun icon for dark theme' className='w-6 h-6' />
			<button className='w-12 h-7 rounded-full relative bg-purple-600'>
				<span className='w-5 h-5 rounded-full absolute top-1 left-1 bg-white' />
			</button>
			<img src={MoonDarkIcon} alt='Moon icon for dark theme' className='w-6 h-6' />
		</div>
	);
}
