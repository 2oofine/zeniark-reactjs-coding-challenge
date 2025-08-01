import React from "react";

type Props = {
  children: React.ReactNode;
  narrow?: boolean;
  wide?: boolean;
};

const Card = (props: Props) => {
  const { children, narrow = false, wide = false } = props;
  const padding = narrow ? "py-5 px-10" : wide ? "py-10 px-15" : "py-10 px-15";

  return (
    <div className="w-full md:w-[50%] flex flex-col items-center justify-center bg-white rounded-md">
      <div className={`w-full flex flex-col items-center text-center justify-center ${padding}`}>{children}</div>
    </div>
  );
};

export default Card;
