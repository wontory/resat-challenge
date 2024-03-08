import Link from 'next/link'

import { cn } from '@/utils/cn'

import Logo from '../../assets/header-logo.svg'

function HeaderLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'border-b-2 border-transparent px-3 py-5 transition hover:border-b-2 hover:border-blue-500 hover:bg-blue-500/5 hover:text-black',
        className,
      )}
    >
      {children}
    </Link>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-black/10 bg-white">
      <div className="container mx-auto flex max-w-screen-lg px-4 text-sm font-semibold text-black/30">
        <div className="flex items-center">
          <Link href="">
            <Logo />
          </Link>
          <nav className="ml-4 flex">
            <HeaderLink href="">미니인턴</HeaderLink>
            <HeaderLink href="">스킬업</HeaderLink>
            <HeaderLink href="">M클래스</HeaderLink>
            <HeaderLink href="">채용관</HeaderLink>
            <HeaderLink href="">해피폴리오</HeaderLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex">
            <HeaderLink href="">서비스 소개</HeaderLink>
            <HeaderLink href="" className="text-blue-400">
              회원가입
            </HeaderLink>
            <HeaderLink href="" className="text-blue-400">
              로그인
            </HeaderLink>
            <HeaderLink href="" className="text-blue-400">
              기업회원
            </HeaderLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
