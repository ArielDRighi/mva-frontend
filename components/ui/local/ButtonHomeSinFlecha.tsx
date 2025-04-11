import React from "react";

const ButtonHome = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <button className={`button ${className}`}>{text}</button>;
};

export default ButtonHome;
