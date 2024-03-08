import Image from 'next/image'
import Thumbnail from '../assets/happyfolio.jpeg'

function HappyfolioCard() {
  return (
    <div className="flex cursor-pointer flex-col rounded-md shadow-lg transition hover:-translate-y-3 hover:shadow-xl">
      <Image src={Thumbnail} alt="openknowl" className="rounded-md" />
      <div className="flex flex-col items-start gap-1 p-3 font-medium">
        <div className="flex gap-2">
          <p className="rounded-md bg-black/5 px-1 py-0.5 text-xs text-black/40">
            이력서/자소서
          </p>
          <p className="rounded-md bg-black/5 px-1 py-0.5 text-xs text-black/40">
            취업스토리
          </p>
        </div>
        <h3 className="text-sm font-bold">
          탑 티어 광고 회사 AE의 취업 준비 마스터북
        </h3>
        <div className="flex items-center gap-1">
          <div className="relative h-4 w-4">
            <Image
              src="https://cdn-upload.miniintern.com/44194/9cbd64a9-ad9d-46ac-9f18-3b41b3c1d890/KakaoTalk20240202142757703.png"
              fill
              alt="profile"
            />
          </div>
          <p className="text-xs text-black/40">광고길잡이</p>
        </div>
        <div className="flex w-full justify-end pt-1 text-sm font-extrabold">
          <span>33,000원</span>
        </div>
      </div>
    </div>
  )
}

export { HappyfolioCard }
