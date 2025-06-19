import React from "react";

const ButtonHome = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button 
      className={`button ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonHome;
