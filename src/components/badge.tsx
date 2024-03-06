import { cn } from '@/utils/cn'

function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Badge }
