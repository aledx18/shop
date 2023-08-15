import Loading from '@/app/games/loading'
import Link from 'next/link'
import { Suspense } from 'react'

async function getGames() {
  const res = await fetch('http://localhost:3000/api/game')
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return data
}

export default async function GetAllGames() {
  const games = await getGames()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {games.map((item: any) => (
            <div key={item.id}>
              <Link href={`/games/${item.id}`}>
                <h1 className='text-lg'>{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  )
}
