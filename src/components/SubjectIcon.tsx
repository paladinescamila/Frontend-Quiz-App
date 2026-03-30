import {useMemo} from 'react';

import {QUIZES_BY_SUBJECT} from '../constants/quizes';
import Icon from './Icon';

export default function SubjectIcon({subject}: {subject: Subject}) {
	const bgBySubject: Record<Subject, string> = useMemo(
		() => ({
			html: 'bg-html',
			css: 'bg-css',
			javascript: 'bg-javascript',
			accessibility: 'bg-accessibility',
		}),
		[],
	);

	return <Icon icon={QUIZES_BY_SUBJECT[subject].icon} className={bgBySubject[subject]} />;
}
