import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const mainNav = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Forms',
    href: '/forms'
  },
  {
    name: 'Review',
    href: '/review'
  }
]

function NavBar() {
  return (
    <nav className='flex w-full items-center justify-between p-4 px-8 h-[60px]'>
      <Logo />
      <div className='flex gap-8'>
        {mainNav.map((item) => (
          <Link href={item.href} key={item.name} className=''>
            {item.name}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <UserButton afterSignOutUrl='/' />
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default NavBar
