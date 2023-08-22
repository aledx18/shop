/* eslint-disable multiline-ternary */
/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import { getGameById } from '@/app/components/GamesView/fetchGame'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Game } from '@/components/interface/types'
import Link from 'next/link'

export default async function GetGameDetail({ params }: any) {
  const {
    background_image,
    short_screenshots,
    description,
    name,
    price,
    genres,
    metacritic,
    rating,
    stores,
    parent_platforms,
    released,
    video
  }: Game = await getGameById(params.id)

  const end = video !== 'Null' ? 4 : 5

  return (
    <section className='container py-2 items-center flex'>
      <div className=' mx-auto flex flex-wrap'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <Link
                href='/games'
                className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
                <svg
                  className='w-3 h-3 mr-2.5 text-[#22c55e]'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
                </svg>
                Games
              </Link>
            </li>

            <li aria-current='page'>
              <div className='flex items-center'>
                <svg
                  className='w-3 h-3 text-[#22c55e] mx-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
                <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
                  {name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className='flex flex-wrap'>
          <div className='flex w-full py-44 px-10 my-4 relative rounded-lg'>
            <img
              src={background_image}
              className='object-center w-100 bg-[#212124] h-100 object-cover inset-0 w-full h-full block absolute rounded-lg'
              alt='asd'
            />
          </div>
          <div className='flex flex-wrap w-2/3'>
            {short_screenshots.slice(1, end).map((item) => (
              <div key={item.id} className='md:p-2 p-1 w-1/4 '>
                <img
                  src={item.image}
                  className='w-full object-cover hover:scale-105 transition duration-300 bg-[#212124] w-220 h-304 object-center block rounded-md'
                  alt='alt'
                />
              </div>
            ))}
            {video !== 'Null' ? (
              <div className='md:p-2 p-1 w-1/4 '>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  width={210}
                  height={400}
                  className='rounded-md transition-transform duration-300 ease-in-out hover:scale-125'
                />
              </div>
            ) : (
              <></>
            )}
            <div className='flex flex-col'>
              <h4 className='py-2 text-2xl font-semibold'>About the game</h4>
              <p className='text-md py-2 text-gray-300'>{description}</p>
            </div>
          </div>

          <div className='flex flex-col items-center w-1/3 pl-6'>
            <Card>
              <CardHeader className='flex items-center'>
                <CardTitle>{name}</CardTitle>
                <CardDescription className='text-lg'>$ {price}</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <Button>Buy Now</Button>
                <Button variant='ghost'>Add to Cart</Button>
              </CardContent>
              <CardFooter>
                <div className='flex flex-col gap-1 rounded-lg border p-2'>
                  <h4 className=' text-[#22c55e]'>
                    Genres:{' '}
                    <span className='text-sm text-gray-200'>
                      {genres.map((item) => item.name).join(', ')}
                    </span>
                  </h4>
                  <h4 className=' text-[#22c55e]'>
                    Metacritic:{' '}
                    <span className='text-sm text-gray-200'>
                      {' '}
                      {metacritic}{' '}
                    </span>
                  </h4>
                  <h4 className='text-[#22c55e]'>
                    Rating:{' '}
                    <span className='text-sm text-gray-200'>{rating} </span>
                  </h4>
                  <h4 className='text-[#22c55e]'>
                    Released date:{' '}
                    <span className='text-sm text-gray-200'>{released} </span>
                  </h4>
                  <h4 className=' text-[#22c55e] '>
                    Platforms:{' '}
                    <span className='text-sm flex text-gray-200'>
                      {parent_platforms.map((item) => item.name).join(', ')}
                    </span>
                  </h4>
                  <div className='flex items-center text-[#22c55e] '>
                    Store:{' '}
                    <span className='text-sm text-gray-200'>
                      {stores.map((item) => item.name).join(', ')}
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
