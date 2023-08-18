/* eslint-disable @next/next/no-img-element */
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