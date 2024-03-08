import Image from 'next/image'

import Finders from '../assets/finders.jpeg'

function CompanyCard() {
  return (
    <div className="grid cursor-pointer grid-cols-3 overflow-hidden rounded-md shadow-lg transition hover:-translate-y-3 hover:shadow-xl">
      <Image
        src={Finders}
        alt="finders"
        className="aspect-square object-cover"
      />
      <div className="grid-span-2 flex flex-col items-start justify-center gap-1">
        <p className="text-xs font-bold text-black/40">개발</p>
        <h3 className="text-sm font-bold">백엔드 개발자</h3>
        <p className="text-xs font-bold">(주)파인더스</p>
        <div className="mt-2 rounded-md bg-blue-400/10 px-1 py-0.5 text-xs font-semibold text-blue-400">
          정규직
        </div>
      </div>
    </div>
  )
}

export { CompanyCard }
