import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function Pagination({ page }: { page: number }) {
  return (
    <div className='flex p-2 gap-1 justify-center'>
      <Link
        href={{
          pathname: '/games',
          query: {
            page: page - 1
          }
        }}
        className={
          buttonVariants({ variant: 'outline' }) +
          (page === 1 ? ' pointer-events-none opacity-50' : '')
        }>
        Prev
      </Link>

      <Link
        href={{
          pathname: '/games',
          query: {
            page: page + 1
          }
        }}
        className={
          buttonVariants({ variant: 'outline' }) +
          (page === 9 ? ' pointer-events-none opacity-50' : '')
        }>
        Next
      </Link>
    </div>
  )
}
