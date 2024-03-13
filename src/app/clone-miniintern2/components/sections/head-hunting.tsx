import Image from 'next/image'

import BannerImage from '../../assets/headhunting_banner_pc.png'

function HeadHunting() {
  return (
    <section className="flex flex-col gap-8">
      <div className="group relative flex items-center justify-between overflow-hidden rounded-lg px-16 py-12 text-white">
        <span className="z-50 text-2xl">
          <strong>이력서 피드백</strong>도 받고 <strong>회사</strong>도{' '}
          <strong>추천</strong>받고 싶다면?
        </span>
        <div className="z-50 cursor-pointer rounded-full bg-white/30 px-7 py-3 text-sm font-bold">
          헤드헌팅 설정하기
        </div>
        <Image
          src={BannerImage}
          alt="이미지"
          fill
          className="absolute transition duration-1000 group-hover:scale-125"
        />
      </div>
    </section>
  )
}

export { HeadHunting }
