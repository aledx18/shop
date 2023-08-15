import { Suspense } from 'react'
import Loading from './loading'
import GetAllGames from '../components/gamesFetch/getAllGames'

export default function GamesView() {
  return (
    <div className='flex h-screen'>
      <p className='text-sky-400'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        dicta laborum voluptatibus assumenda, at optio, excepturi enim maiores
        dolorem corrupti id quasi? Magni minus sunt animi et mollitia,
        consequuntur veniam.
      </p>

      <Suspense fallback={<Loading />}>
        <GetAllGames />
      </Suspense>
    </div>
  )
}
