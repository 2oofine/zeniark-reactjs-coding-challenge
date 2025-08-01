import { Question } from "@/types/questions";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ResultState {
  question: Question;
  answer: string;
}

const initialState: ResultState[] = [];

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    getAnswers: (state, action: PayloadAction<{ question: Question; answer: string }>) => {
      state.push({
        question: action.payload.question,
        answer: action.payload.answer,
      });
    },
    resetResults: () => {
      return [];
    },
  },
});

export const { getAnswers, resetResults } = resultSlice.actions;

export default resultSlice.reducer;
