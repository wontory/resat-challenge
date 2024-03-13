import { MClassCard } from '../m-class-card'
import { SectionTitle } from '../section-title'

function MClassSection() {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        title="M클래스를 신청하세요"
        subtitle="미니인턴만의 색깔을 가진 교육을 제공해 드려요"
        linkText="모든 M클래스 보기"
      />
      <div className="grid grid-cols-4 gap-8">
        <MClassCard />
        <MClassCard />
        <MClassCard />
        <MClassCard />
      </div>
    </section>
  )
}

export { MClassSection }
