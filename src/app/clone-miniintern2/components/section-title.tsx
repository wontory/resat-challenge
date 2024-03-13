import Link from 'next/link'

import ShortArrow from '../assets/short-arrow.svg'

function SectionTitle({
  title,
  subtitle,
  linkText,
}: {
  title: string
  subtitle: string
  linkText: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
      <div className="flex w-full justify-between">
        <p className="text-gray-700">{subtitle}</p>
        <Link href="" className="flex items-center gap-2">
          <ShortArrow />
          <p className="text-sm text-blue-400">{linkText}</p>
        </Link>
      </div>
    </div>
  )
}

export { SectionTitle }
