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
      className={`text-white flex items-center justify-between gap-5 ${color} rounded-lg px-5 py-3 cursor-pointer hover:opacity-90`}
    >
      <Image src={icon} alt={`${name} icon`} width={20} height={20} /> {name}
    </button>
  );
};

export default Button;
