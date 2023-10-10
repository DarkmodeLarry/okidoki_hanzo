import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      <h1 className='bg-gradient-to-r from-blue-800 via-pink-500 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent'>
        OkiDoki
      </h1>
    </Link>
  )
}

export default Logo
