import { Game } from '@/components/interface/types'
import { getGames } from './fetchGame'
import Link from 'next/link'

import {
  IconXbox,
  IconPlaySta,
  IconWindow,
  IconAndroid,
  IconNintendo
} from '@/components/icons/icons'
import { FC } from 'react'

interface PlatformIconProps {
  w: string
  h: string
}

export default async function AllGames({ page }: { page: number }) {
  const games = await getGames({ page })

  type PlatformIconComponent = FC<PlatformIconProps>
  const platformIcons: Record<string, PlatformIconComponent> = {
    Xbox: IconXbox,
    PlayStation: IconPlaySta,
    PC: IconWindow,
    Android: IconAndroid,
    Nintendo: IconNintendo
  }
  return (
    <>
      <div className='flex flex-wrap mx-28'>
        {games.map((game: Game) => (
          <div
            key={game.id}
            className='grid grid-cols-1 p-1 sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto'>
            <div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-[#0c0a09]/100 via-black/10 hover:via-[#0c0a09]/80'>
              <Link href={`/games/${game.id}`}>
                <div className='flex justify-between items-center'>
                  <h1 className='mt-1 text-lg font-semibold text-[#a1a1aa] '>
                    {game.name}
                  </h1>
                  <div className='flex'>
                    {game.parent_platforms.map((pl) => {
                      const PlatformIcon = platformIcons[pl.name]

                      if (PlatformIcon) {
                        return (
                          <div key={pl.id}>
                            <PlatformIcon w='30' h='20' />
                          </div>
                        )
                      } else {
                        return null
                      }
                    })}
                  </div>
                </div>
              </Link>
              <div className='flex gap-1'>
                {game.genres.map((pl) => (
                  <p className='text-sm' key={pl.id}>
                    {pl.name}
                  </p>
                ))}
              </div>
            </div>
            <div className='grid gap-4 col-start-1 col-end-3 row-start-1 '>
              <img
                src={game.background_image}
                alt=''
                className='w-100 h-60 object-cover rounded-lg bg-[#212124]'
                loading='lazy'
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

/* <div className='flex flex-wrap container mx-auto'>
      {games.map((game: Game) => (
        <div key={game.id} className='w-full p-1 sm:w-1/2 md:w-1/2 lg:w-1/4'>
          <div className='flex flex-col items-center justify-center bg-[#1c1917] rounded-md'>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={game.background_image}
                alt={game.slug}
                className='rounded-t-md object-cover'
                sizes='(max-width: 10px)'
                fill
              />
            </AspectRatio>
            <Link href={`/games/${game.id}`}>
              <h2 className='text-md p-2 font-medium'>{game.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div> */

/* /* <div
          key={game.id}
          style={{
            backgroundImage: `url(${game.background_image})`
          }}
          className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-44 flex items-end overflow-hidden rounded-lg bg-cover bg-center object-cover object-center shadow-xl'>
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
