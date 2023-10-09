import React from 'react'
import { siteConfig } from '@/config/site'
import { NavItem } from '@/types/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavLinkProps {
  items?: NavItem[]
}

export function NavLinks({ items }: NavLinkProps) {
  return (
    <div className='flex'>
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

export default NavLinks
