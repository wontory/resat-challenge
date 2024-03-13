import { HappyfolioCard } from '../happyfolio-card'
import { SectionTitle } from '../section-title'

function HappyfolioSection() {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        title="해피폴리오로 취업 정보를 받으세요"
        subtitle="검증된 현직자의 취업 스토리로 취준 전략을 세우세요"
        linkText="모든 해피폴리오 보기"
      />
      <div className="grid grid-cols-4 gap-8">
        <HappyfolioCard />
        <HappyfolioCard />
        <HappyfolioCard />
        <HappyfolioCard />
      </div>
    </section>
  )
}

export { HappyfolioSection }
