import {useEffect} from 'react';
import {persistTheme} from '../utils/theme';
import {useHandleTheme} from '../redux/useHandleTheme';
import MoonLightIcon from '../assets/icon-moon-light.svg';
import MoonDarkIcon from '../assets/icon-moon-dark.svg';
import SunLightIcon from '../assets/icon-sun-light.svg';
import SunDarkIcon from '../assets/icon-sun-dark.svg';

export default function ThemeToggle() {
	const {theme, handleThemeToggle} = useHandleTheme();

	useEffect(() => {
		if (theme === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');

		persistTheme(theme);
	}, [theme]);

	return (
		<div className='flex flex-row gap-4 ml-auto'>
			<img
				src={theme === 'dark' ? SunLightIcon : SunDarkIcon}
				alt='Sun icon for dark theme'
				className='w-6 h-6'
			/>
			<button
				className='w-12 h-7 rounded-full relative bg-purple-600 cursor-pointer'
				type='button'
				aria-label='Toggle theme'
				onClick={handleThemeToggle}>
				<span
					className={`w-5 h-5 rounded-full absolute top-1 left-1 transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'} bg-white`}
				/>
			</button>
			<img
				src={theme === 'dark' ? MoonLightIcon : MoonDarkIcon}
				alt='Moon icon for dark theme'
				className='w-6 h-6'
			/>
		</div>
	);
}
