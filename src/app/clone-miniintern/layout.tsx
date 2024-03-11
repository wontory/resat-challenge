import { SiteFooter } from './components/layouts/site-footer'
import { SiteHeader } from './components/layouts/site-header'

export default function MiniinternLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
