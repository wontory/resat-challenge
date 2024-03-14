import Link from 'next/link'

import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full bg-white shadow">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-8">
        <Link href="" className="text-xl font-semibold transition-colors">
          Title
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
