"use client";

import { resetResults } from "@/lib/features/resultsSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const PlayAgainButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePlayAgain = () => {
    dispatch(resetResults());
    router.push("/");
  };
  return (
    <button onClick={handlePlayAgain} className="text-primary font-semibold text-3xl underline cursor-pointer">
      PLAY AGAIN
    </button>
  );
};

export default PlayAgainButton;
