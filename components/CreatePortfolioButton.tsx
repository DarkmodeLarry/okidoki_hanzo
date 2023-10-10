'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import CreatePortfolioSheet from './CreatePortfolioSheet'

function CreatePortfolioButton() {
  const [open, setOpen] = useState(false)
  const handleOpenChange = (open: boolean) => setOpen(open)

  return (
    <div className=' bg-gradient-to-r from-blue-800 to-pink-500 to-indigo-400 w-full p-1 rounded-md'>
      <Button
        variant={'outline'}
        className='dark:text-white dark:bg-neutral-950 w-full bg-white'
        onClick={() => setOpen(true)}
      >
        <span className='bg-gradient-to-r from-blue-800 to-pink-500 hover:to-indigo-400 bg-clip-text text-transparent'>
          Create a New Portfolio
        </span>
      </Button>
      <CreatePortfolioSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  )
}

export default CreatePortfolioButton
