import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(` 
    w-full
    rounded-full
    border
    border-transparent
    px-3
    py-4
    disabled:cursor-not-allowed
    disabled-opacity-50
    text-black
    bg-green-500
    transition
    font-bold
    hover:opacity-75
    `)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
