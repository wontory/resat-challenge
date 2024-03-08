import { CompanyCard } from '../company-card'
import { SectionTitle } from '../section-title'

function CompanySection() {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        title="채용 중인 기업을 확인하세요"
        subtitle="내게 맞는 기업을 찾았나요? 바로 지원해 보세요"
        linkText="모든 채용정보 보기"
      />
      <div className="grid grid-cols-2 gap-8">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </section>
  )
}

export { CompanySection }
