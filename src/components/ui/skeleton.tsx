import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
} // eslint-disable-next-line no-undef
: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
