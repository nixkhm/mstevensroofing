import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        rounded-full 
        border
        border-transparent
        bg-yellow-500
        font-bold 
        text-black
        transition
        hover:scale-110
        hover:bg-yellow-600
        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
          disabled && 'cursor-not-allowed opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
