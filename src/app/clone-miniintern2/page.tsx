import { Metadata } from 'next'

import { HeroSection } from './components/sections/hero-section'
import { InternSection } from './components/sections/intern-section'
import { ServiceLaunching } from './components/sections/service-launching'
import { CompanySection } from './components/sections/company-section'
import { HeadHunting } from './components/sections/head-hunting'
import { MClassSection } from './components/sections/m-class-section'
import { HappyfolioSection } from './components/sections/happyfolio-section'

export const metadata: Metadata = {
  title: '4일차 미니인턴 서비스 메인페이지 클론',
}

export default function MiniinternPage() {
  return (
    <>
      <div className="container mx-auto mb-16 flex max-w-screen-lg flex-col gap-16 p-4 py-10">
        <HeroSection />
        <InternSection />
      </div>
      <div className="mb-16 h-60 w-full overflow-visible bg-indigo-400/5">
        <ServiceLaunching />
      </div>
      <div className="container mx-auto flex max-w-screen-lg flex-col gap-16 p-4 py-10 last:mb-16">
        <CompanySection />
        <HeadHunting />
        <MClassSection />
        <HappyfolioSection />
      </div>
    </>
  )
}
