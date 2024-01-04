import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextBubbleProps {
  text: string
  className?: string
  infoCard?: boolean
}

const TextBubble: React.FC<TextBubbleProps> = ({
  text,
  className,
  infoCard
}) => {
  return (
    <div
      className={twMerge(
        `rounded-xl bg-white p-5 font-bold`,
        className,
        infoCard &&
          'delay-50 transition duration-300 ease-in-out hover:bg-black hover:text-white lg:hover:scale-110'
      )}
    >
      {text}
    </div>
  )
}

export default TextBubble
