export const getDefaultTheme = (): Theme =>
	window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
