import Image from 'next/image'
import Thumbnail from '../assets/openknowl.png'

function MiniinternCard() {
  return (
    <div className="group flex cursor-pointer flex-col rounded-md shadow-lg transition hover:-translate-y-3 hover:shadow-xl">
      <div className="overflow-hidden rounded-md duration-200 group-hover:ring-2 group-hover:ring-inset group-hover:ring-orange-500">
        <Image src={Thumbnail} alt="openknowl" />
      </div>
      <div className="flex flex-col items-start gap-2 p-3">
        <div className="rounded-full bg-black/70 px-2 py-0.5 text-xs font-bold text-white">
          D-17
        </div>
        <h3 className="text-sm font-bold">
          마니인턴 잠재 기업고객 발굴을 위한 섭외 방안 제안
        </h3>
      </div>
    </div>
  )
}

export { MiniinternCard }
