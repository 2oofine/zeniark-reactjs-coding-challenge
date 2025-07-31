export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: AnswerType;
  incorrect_answers: AnswerType[];
};

export enum AnswerType {
  True = "True",
  False = "False",
}

export type Questions = {
  results: Question[];
};
