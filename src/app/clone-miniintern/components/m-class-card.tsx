import Image from 'next/image'
import Thumbnail from '../assets/mclass_banner.jpeg'

function MClassCard() {
  return (
    <div className="flex cursor-pointer flex-col rounded-md shadow-lg transition hover:-translate-y-3 hover:shadow-xl">
      <Image src={Thumbnail} alt="openknowl" className="rounded-t-md" />
      <div className="bg-black/70 px-3 py-1 text-xs font-bold text-white">
        무료
      </div>
      <div className="flex flex-col items-start gap-1 p-3 font-medium">
        <p className="text-xs text-black/40">창업</p>
        <h3 className="text-sm font-bold">
          [창업] 2024 강남취창업허브센터 투어 (상시)
        </h3>
        <p className="text-xs text-black/40">강남취창업허브센터 (오프라인)</p>
        <p className="pt-1 text-xs text-emerald-500">0/180명 모집</p>
        <div className="flex w-full justify-between gap-1 pt-1 text-xs font-extrabold">
          <div className="text-emerald-500">선착순 선발 모집중</div>
          <div className="text-black/60">D-236</div>
        </div>
      </div>
    </div>
  )
}

export { MClassCard }
