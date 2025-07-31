import Card from "@/components/atoms/Card";
import React from "react";
import Image from "next/image";
const QuestionsCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Image src={"/logo.png"} alt="Zeniark Logo" width={50} height={50} />
          <p>Category</p>
        </div>
        <p>1/10</p>
      </div>
    </Card>
  );
};

export default QuestionsCard;
