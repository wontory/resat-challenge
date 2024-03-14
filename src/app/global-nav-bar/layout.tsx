import { SiteHeader } from './components/site-header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1">{children}</main>
    </div>
  )
}
