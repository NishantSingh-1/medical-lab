import type { InputHTMLAttributes } from "react";

const Input = ({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={`input-field ${className}`} {...props} />;
};

export default Input;