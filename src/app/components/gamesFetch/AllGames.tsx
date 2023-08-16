import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Game } from '@/components/interface/types'
import { getGames } from './fetchGame'
import Link from 'next/link'
import Image from 'next/image'

export default async function AllGames({ page }: { page: number }) {
  const games = await getGames({ page })
  return (
    <div className='flex flex-wrap mx-auto'>
      {games.map((game: Game) => (
        <div
          key={game.id}
          className='w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/4 flex'>
          <Link href={`/games/${game.id}`}>
            <div className='flex items-center justify-center gap-3 bg-gray-50/20 backdrop-blur-md rounded-tl-md absolute z-10'>
              <h2 className='text-md p-2 font-medium text-gray-900 '>
                {game.name}
              </h2>
            </div>
          </Link>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={game.background_image}
              alt={game.slug}
              className='rounded-md object-cover'
              sizes='(max-width: 10px)'
              fill
            />
          </AspectRatio>
        </div>
      ))}
    </div>
  )
}

/* <div
  style={{
    backgroundImage: `url(${game.background_image})`
  }}
  className='flex h-[300px] w-full items-end overflow-hidden rounded-lg bg-cover bg-center object-cover object-center shadow-xl'>
  <div className='w-full overflow-hidden rounded-b-lg bg-grisTwo/60 backdrop-blur-md '>
    <Link href={`/games/${game.id}`}>
      <div className='flex items-center gap-3'>
        <h2 className='text-md p-2 font-medium text-white '>
          {game.name}
        </h2>
      </div>
    </Link>
    <div className='flex gap-1 p-2'>
      {game.genres.map((pl) => (
        <h2 className='text-gray-200' key={pl.id}>
          {pl.name}
        </h2>
      ))}
      <h3 className='font-medium text-white'>$ {game.price}</h3>
    </div>
  </div>
</div> */
/* <div

key={game.id}
className='my-2 w-full rounded-md bg-grisOne lg:w-full'>
<div className='flex items-center justify-between'>
  <div className='flex h-20 items-center rounded-md'>
    <Image
      className='h-20 w-auto rounded-l-md'
      src={game.background_image}
      width={100}
      height={100}
      alt={game.slug}
      quality={40}
      loading='lazy'
    />

    <Link href={`/games/${game.id}`}>
      <h2 className='text-md pl-5 font-semibold text-white '>
        {game.name}
      </h2>
    </Link>
  </div>
  <div className='flex items-center gap-10'>
    <div className='flex gap-1'>
      {game.parent_platforms.map((pl) => {
        const PlatformIcon = platformIcons[pl.name]

        if (PlatformIcon) {
          return (
            <div key={pl.id}>
              <PlatformIcon w='20' h='20' />
            </div>
          )
        } else {
          return null
        }
      })}
    </div>

    <div className='flex gap-1'>
      {game.genres.map((pl) => (
        <h2 key={pl.id}>{pl.name}</h2>
      ))}
    </div>
  </div>

  <div className='px-6'>
    <h3 className='font-bold text-white'>$ {game.price}</h3>
  </div>
</div>
</div> */
