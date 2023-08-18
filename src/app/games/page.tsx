import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import AllGames from '../components/GamesView/AllGames'
import Pagination from '../components/GamesView/pagination'
import LoadingGrid from '../components/GamesView/LoadingGrid'

export default async function GamesView({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  await new Promise((resolve) => setTimeout(resolve, 8000))

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

      <Suspense fallback={<LoadingGrid />}>
        <AllGames page={page} />
      </Suspense>

      <Pagination page={page} />
    </section>
  )
}
