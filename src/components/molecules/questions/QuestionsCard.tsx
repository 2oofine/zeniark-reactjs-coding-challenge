"use client";

import { QuestionsResponse } from "@/app/api/questions/route";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { getAnswers } from "@/lib/features/resultsSlice";
import { decode } from "he";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  questions: QuestionsResponse;
};

const QuestionsCard = (props: Props) => {
  const { questions } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const router = useRouter();

  const question = questions.data.results[currentIndex];

  const handleAnswer = (answer: string) => {
    dispatch(getAnswers({ question, answer }));
    if (currentIndex + 1 === questions.data.results.length) {
      router.push("/trivia/results");
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <Card narrow>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <Image src={"/logo.png"} alt="Zeniark Logo" width={50} height={50} />
          <p>Category: {question.category}</p>
        </div>
        <p>
          {currentIndex + 1}/{questions.data.results.length}
        </p>
      </div>

      <hr className="w-full text-slate-300 my-5" />

      <div className="text-4xl my-5">{decode(question.question)}</div>

      <hr className="w-full text-slate-300 my-5" />

      <div className="flex md:flex-row flex-col items-center justify-between md:gap-14 gap-4">
        <Button icon="/icons/check-icon.svg" name="True" onClick={() => handleAnswer("True")} color="bg-true" />
        <Button icon="/icons/x-icon.svg" name="False" onClick={() => handleAnswer("False")} color="bg-false" />
      </div>
    </Card>
  );
};

export default QuestionsCard;
