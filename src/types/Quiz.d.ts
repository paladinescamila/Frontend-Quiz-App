type Quiz = {
	id: Subject;
	title: string;
	icon: string;
	questions: Question[];
};

type Subject = 'html' | 'css' | 'javascript' | 'accessibility';
