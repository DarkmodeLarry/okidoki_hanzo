import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <div className=' flex flex-col items-center w-full min-h-screen'>
      <div className='dark:bg-netrual-950 flex justify-center flex-grow w-full'>
        <div className='max-w-[920px] flex flex-col flex-grow px-4 py-12'>{children}</div>
      </div>
    </div>
  )
}

export default layout
