import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div className='flex items-center flex-1'>
      <div
        className='w-full relative before:pointer-events-none flex focus-within:before:opacity-100 before:opacity-0 before:absolute before:-inset-1 before:rounded-[12px] before:border before:border-[#77f6aa]/70 before:ring-2 before:ring-gray-200 before:transition
after:pointer-events-none after:absolute after:inset-px after:rounded-[7px] after:shadow-highlight after:shadow-white focus-within:after:shadow-[#77f6aa] after:transition'
      >
        <input
          className={cn(
            'relative  text-sm text-neutral-200 bg-neutral-750 placeholder:text-neutral-500 px-3.5 py-2 rounded-lg border border-black/5 shadow-input shadow-black/10 !outline-none',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
