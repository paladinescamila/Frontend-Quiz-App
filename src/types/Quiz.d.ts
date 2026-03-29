type Quiz = {
	id: QuizID;
	title: string;
	icon: string;
	questions: Question[];
};

type QuizID = 'html' | 'css' | 'javascript' | 'accessibility';
