import {useAppSelector} from './hooks';

export const useHandlePage = () => {
	const page = useAppSelector((state) => state.page.currentPage);

	return {page};
};
