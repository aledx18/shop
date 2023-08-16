import { Suspense } from 'react'
import Loading from './loading'
import AllGames from '../components/gamesFetch/AllGames'
import Pagination from '../components/gamesFetch/pagination'

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
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta!
          Quia ex quis illo quibusdam accusamus maiores quasi, porro natus illum
          rerum libero corporis itaque nemo repudiandae ea aliquid quae.
        </p>
        <Suspense fallback={<Loading />}>
          <AllGames page={page} />
        </Suspense>
      </div>
      <Pagination page={page} />
    </section>
  )
}
