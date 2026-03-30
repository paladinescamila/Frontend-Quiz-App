import {useAppDispatch, useAppSelector} from './hooks';
import {toggleTheme} from './themeSlice';

export const useHandleTheme = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme.currentTheme);

	const handleThemeToggle = () => dispatch(toggleTheme());

	return {theme, handleThemeToggle};
};
