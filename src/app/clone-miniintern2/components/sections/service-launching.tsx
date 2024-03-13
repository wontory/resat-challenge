import { Carousel, CarouselItem } from '../carousel'

function ServiceLaunching() {
  return (
    <section className="container mx-auto flex max-w-screen-lg p-4 py-6 last:mb-16">
      <Carousel>
        <CarouselItem>
          구글 스프레드시트로
          <br />
          마케팅 데이터 분석하기
        </CarouselItem>
        <CarouselItem>
          CRM 마케팅
          <br />
          이해하기
        </CarouselItem>
        <CarouselItem>
          검색광고(SA)
          <br />
          이해하기
        </CarouselItem>
        <CarouselItem>
          디스플레이 광고(DA)
          <br />
          이해하기
        </CarouselItem>
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
