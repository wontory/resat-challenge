import { MiniinternCard } from '../miniintern-card'
import { SectionTitle } from '../section-title'

function InternSection() {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        title="미니인턴으로 취업하세요"
        subtitle="이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요"
        linkText="모든 기업과제 보기"
      />
      <div className="grid grid-cols-4 gap-8">
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
        <MiniinternCard />
      </div>
    </section>
  )
}

export { InternSection }
