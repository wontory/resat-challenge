import { Carousel, CarouselItem } from '../carousel'

import Skillup5 from '../../assets/skillup5.png'
import Skillup6 from '../../assets/skillup6.png'
import Skillup7 from '../../assets/skillup7.png'
import Skillup8 from '../../assets/skillup8.png'

function ServiceLaunching() {
  return (
    <section className="container mx-auto flex max-w-screen-lg p-4 py-6 last:mb-16">
      <Carousel>
        <CarouselItem src={Skillup5} alt={'skillup5'} />
        <CarouselItem src={Skillup6} alt={'skillup6'} />
        <CarouselItem src={Skillup7} alt={'skillup7'} />
        <CarouselItem src={Skillup8} alt={'skillup8'} />
      </Carousel>
      <div className="flex flex-col items-start">
        <div className="mt-4 rounded-r-full bg-blue-400 px-8 py-2 text-sm font-medium text-white">
          서비스 런칭
        </div>
        <div className="px-8 py-4">
          <p className="mb-2 font-medium text-black/50">
            커리어 성장으로 가는 길
          </p>
          <p className="text-2xl font-extrabold">
            업계 사람들이 주목하는 스킬을 찾고,
            <br />
            스킬업에서 경쟁력을 키워 보세요.
          </p>
        </div>
      </div>
    </section>
  )
}

export { ServiceLaunching }
