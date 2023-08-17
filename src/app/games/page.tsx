import { Suspense } from 'react'
import Loading from './loading'
import AllGames from '../components/gamesFetch/AllGames'
import Pagination from '../components/gamesFetch/pagination'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function GamesView({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === 'string' &&
    !isNaN(Number(searchParams.page)) &&
    Number(searchParams.page) !== 0
      ? Number(searchParams.page)
      : 1

  return (
    <section className='flex flex-col'>
      <div className='bg-[#1c1917] my-2 rounded-md p-2 flex justify-end mx-28'>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input type='email' placeholder='Search...' />
          <Button type='submit'>Search</Button>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <AllGames page={page} />
      </Suspense>
      <Pagination page={page} />
    </section>
  )
}
