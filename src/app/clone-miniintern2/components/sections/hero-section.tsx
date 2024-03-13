import Image from 'next/image'

import LongArrow from '../../assets/long-arrow.svg'
import MainImg1 from '../../assets/main_img_1.jpg'
import MainImg2 from '../../assets/main_img_2.webp'

function HeroSection() {
  return (
    <section className="grid w-full grid-cols-3 gap-6">
      <div className="relative col-span-2 cursor-pointer">
        <Image src={MainImg1} alt="main_img_1" className="rounded-md" />
        <div className="absolute top-0 flex flex-col gap-2 p-8 text-white">
          <h1 className="text-4xl">최대한의 효율로</h1>
          <h1 className="text-4xl">직무 경험을 쌓아보세요</h1>
          <h2 className="pt-2 text-2xl">
            2주만에 실무 경험을 만드는, 미니인턴
          </h2>
        </div>
        <div className="absolute bottom-0 flex items-center gap-2 p-8 text-white">
          <LongArrow /> <span>회원가입하기</span>
        </div>
      </div>
      <div className="cursor-pointer">
        <Image src={MainImg2} alt="main_img_2" className="rounded-md" />
      </div>
    </section>
  )
}

export { HeroSection }
