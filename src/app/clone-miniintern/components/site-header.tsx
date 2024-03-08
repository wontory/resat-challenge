import Link from 'next/link'

import Logo from '../assets/header-logo.svg'

function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-black/10 bg-white">
      <div className="container mx-auto flex max-w-screen-lg p-4 text-sm font-semibold text-black/30">
        <div className="flex items-center">
          <Link href="">
            <Logo />
          </Link>
          <nav className="ml-4 flex gap-6">
            <Link href="">미니인턴</Link>
            <Link href="">스킬업</Link>
            <Link href="">M클래스</Link>
            <Link href="">채용관</Link>
            <Link href="">해피폴리오</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex gap-6">
            <Link href="">서비스 소개</Link>
            <Link href="" className="text-blue-400">
              회원가입
            </Link>
            <Link href="" className="text-blue-400">
              로그인
            </Link>
            <Link href="" className="text-blue-400">
              기업회원
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
