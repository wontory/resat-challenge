import Link from 'next/link'

import Logo from '../assets/footer-logo.svg'
import Instagram from '../assets/footer-instagram.svg'

function SiteFooter() {
  return (
    <footer className="flex flex-col border-t border-black/10 p-4 py-8">
      <div className="container mx-auto max-w-screen-lg">
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <div className="flex gap-8 text-sm">
            <Link href="">이용약관</Link>
            <Link href="">개인정보취급방침</Link>
            <Link href="">새로운 소식</Link>
            <Link href="">자주하는 질문</Link>
          </div>
        </div>

        <div className="flex justify-between">
          <table>
            <tbody className="text-left text-sm">
              <tr>
                <th className="w-24 text-base font-bold">고객센터</th>
                <td>이메일 help@miniintern.com / 전화 010-4875-3056</td>
              </tr>
              <tr>
                <th className="text-base font-bold">기업 서비스</th>
                <td>
                  기업회원 페이지{' '}
                  <Link href="" className="font-bold">
                    바로가기
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Instagram />
        </div>
        <hr className="my-6" />
        <div className="flex flex-col text-xs text-black/40">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <span>
                (주)오픈놀 | 대표이사 : 권인택 | 이메일 : help@miniintern.com |
                문의 : 070-8221-3056
              </span>
              <span>
                서울특별시 영등포구 양평로 2 주식회사 오픈놀 | 사업자등록번호 :
                110-81-99930
              </span>
              <span>
                직업정보제공사업 : 서울서부 제2018-19호 | 통신판매업신고 :
                제2021-서울영등포-2467호 | 유료직업소개사업등록번호 :
                제2021-3180239-14-5-00015호
              </span>
            </div>
            <div className="text-sm">ⓒ OPENKNOWL</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
