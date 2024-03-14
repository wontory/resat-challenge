import Link from 'next/link'

export function MainNav() {
  return (
    <nav className="hidden items-center gap-6 text-sm lg:flex">
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
  )
}
