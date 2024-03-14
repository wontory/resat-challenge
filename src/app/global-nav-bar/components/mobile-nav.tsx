'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/utils/cn'
import { Button } from '@/components/button'
import { Icons } from './icons'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div className="flex items-center gap-6 text-sm lg:hidden">
        <Button onClick={handleToggle} className="h-9 w-9 shadow-none">
          <Icons.HamburgerMenu
            className={cn(
              'absolute h-[1.2rem] w-[1.2rem] transition-all',
              isOpen ? '-rotate-90 scale-0' : 'rotate-0 scale-100',
            )}
          />
          <Icons.Cross
            className={cn(
              'absolute h-[1.2rem] w-[1.2rem] transition-all',
              isOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0',
            )}
          />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      <nav
        className={cn(
          'absolute top-16 w-40 flex-col gap-4 rounded-lg border bg-white p-4 text-sm shadow-md lg:hidden',
          isOpen ? 'flex' : 'hidden',
        )}
      >
        <Link
          href=""
          className="text-black/50 transition-colors hover:text-black/80"
        >
          Home
        </Link>
        <Link
          href=""
          className="text-black/50 transition-colors hover:text-black/80"
        >
          About
        </Link>
        <Link
          href=""
          className="text-black/50 transition-colors hover:text-black/80"
        >
          Contact
        </Link>
        <Link
          href=""
          className="text-black/50 transition-colors hover:text-black/80"
        >
          FAQ
        </Link>
      </nav>
    </>
  )
}
