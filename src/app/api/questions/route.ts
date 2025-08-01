import data from "@/data/questions.json";
import { Questions } from "@/types/questions";
import { NextResponse } from "next/server";

export type QuestionsResponse = {
  message: string;
  data: Questions;
};

export async function GET() {
  const questions = data as Questions;
  const randomizedQuestions = questions.results.sort(() => Math.random() - 0.5).slice(0, 10);
  if (randomizedQuestions && randomizedQuestions.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json<QuestionsResponse>({
      message: "Questions fetched",
      data: { results: randomizedQuestions },
    });
  }

  return NextResponse.json<QuestionsResponse>(
    {
      message: "Failed to fetch questions",
      data: { results: [] },
    },
    { status: 404 }
  );
}
