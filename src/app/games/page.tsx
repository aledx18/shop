import { Suspense } from 'react'

import AllGames from '../components/GamesView/AllGames'
import Pagination from '../components/GamesView/pagination'

import LoadingGrid from '../components/GamesView/LoadingGrid'
import Search from '../components/GamesView/Search'
import Order from '../components/GamesView/Order'

export default async function GamesView({
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

  const slug = typeof searchParams.slug === 'string' ? searchParams.slug : ''
  const orderBy =
    typeof searchParams.orderBy === 'string' ? searchParams.orderBy : ''

  return (
    <section className='flex flex-col'>
      <div className='bg-[#1c1917] my-2 rounded-md p-2 flex justify-between lg:mx-20'>
        <Order page={page} orderBy={orderBy} />
        <Search slug={slug} />
      </div>

      <Suspense fallback={<LoadingGrid />}>
        <AllGames orderBy={orderBy} page={page} slug={slug} />
      </Suspense>
      <Pagination page={page} orderBy={orderBy} />
    </section>
  )
}
