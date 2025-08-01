"use client";
import Card from "@/components/atoms/Card";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { AnswerType } from "@/types/questions";
import { decode } from "he";
import Link from "next/link";
import PlayAgainButton from "./PlayAgainButton";

const Results = () => {
  const results = useSelector((state: RootState) => state.results);

  const totalScores = () => {
    return results.filter((result) => result.answer === result.question.correct_answer).length;
  };

  return (
    <Card narrow>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
          <Image src={"/logo.png"} alt="Zeniark Logo" width={50} height={50} />
        </div>

        {results && results.length ? (
          <div className="flex-1 flex justify-center">
            <p className="font-semibold text-2xl text-center">Final Results</p>
          </div>
        ) : (
          <></>
        )}

        <div className="w-[50px] h-[50px]" />
      </div>
      <hr className="w-full text-slate-300 my-5" />

      {results && results.length ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-3xl">
              {totalScores()}/{results.length}
            </p>
            <p>Your Score</p>
          </div>

          <hr className="w-full text-slate-300 my-5" />

          {results.map((result, index) => {
            const answerColor = (answer: string) => {
              return answer === AnswerType.True ? "text-true" : "text-false";
            };

            const answerMark = (answer: string, correctAnswer: string) => {
              return answer === correctAnswer ? "/icons/correct-icon.svg" : "/icons/wrong-icon.svg";
            };

            return (
              <div key={index} className="w-full">
                <div className="flex items-start justify-between gap-3 my-2">
                  <p className="text-slate-400">{index + 1}.</p>
                  <div className="flex flex-col text-left items-start w-full">
                    <p>{decode(result.question.question)}</p>
                    <p className="text-slate-400 italic text-sm">
                      The correct answer is{" "}
                      <span className={`${answerColor(result.question.correct_answer)}`}>
                        {result.question.correct_answer}
                      </span>
                      . You answered <span className={`${answerColor(result.answer)}`}>{result.answer}</span>
                    </p>
                  </div>

                  <div className="mt-2">
                    <Image
                      src={answerMark(result.answer, result.question.correct_answer)}
                      alt="Result mark"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                <hr className="border-t border-dotted border-slate-300 my-2 w-full" />
              </div>
            );
          })}

          <div className="my-10">
            <PlayAgainButton />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <div>No results yet, please take a trivia quiz first.</div>
          <Link href="/" className="mt-4 text-primary font-semibold underline">
            Go to Trivia Homepage
          </Link>
        </div>
      )}
    </Card>
  );
};

export default Results;
