type Answer = {
	correct: string | null;
	selected: string | null;
	state: AnswerState;
};

type AnswerState = 'none' | 'correct' | 'incorrect';
