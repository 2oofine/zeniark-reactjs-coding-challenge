"use client";
import React from "react";
import Image from "next/image";

type ButtonColor = "bg-true" | "bg-false" | "bg-primary";

type Props = {
  name: string;
  icon: string;
  color?: ButtonColor;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { name, icon, onClick, color = "bg-primary" } = props;
  return (
    <button
      onClick={onClick}
      className={`text-white flex items-center justify-center md:justify-between md:gap-5 gap-3 ${color} rounded-lg p-5 h-1 w-full cursor-pointer hover:opacity-90`}
    >
      <Image src={icon} alt={`${name} icon`} width={20} height={20} /> {name}
    </button>
  );
};

export default Button;
