const THEME_STORAGE_KEY = 'theme';

export const getDefaultTheme = (): Theme => {
	if (typeof window === 'undefined') return 'light';

	const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

	if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

export const persistTheme = (theme: Theme) => {
	if (typeof window === 'undefined') return;
	window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};
