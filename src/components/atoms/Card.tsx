import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-md flex flex-col items-center text-center justify-center py-10 px-20">
        {children}
      </div>
    </div>
  );
};

export default Card;
