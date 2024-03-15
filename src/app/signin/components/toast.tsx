import { cn } from '@/utils/cn'

export function Toast({
  className,
  content,
  isVisible,
}: {
  className?: string
  content: string
  isVisible: boolean | undefined
}) {
  return (
    <div
      className={cn(
        'fixed -bottom-full right-4 rounded-lg px-6 py-4 font-semibold text-white shadow-md transition-all',
        isVisible && 'bottom-4',
        className,
      )}
    >
      <span>{content}</span>
    </div>
  )
}
