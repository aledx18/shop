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
    released
  }: Game = await getGameById(params.id)
  return (
    <section className='text-gray-400 container mt-1 items-center flex'>
      <div className=' mx-auto flex flex-wrap'>
        <div className='flex flex-wrap'>
          <div className='flex w-full py-44 px-10 my-4 relative rounded-lg'>
            <img
              src={background_image}
              className='object-center w-100 bg-[#212124] h-100 object-cover inset-0 w-full h-full block absolute rounded-lg'
              alt='asd'
            />
          </div>
          <div className='flex flex-wrap w-2/3'>
            {short_screenshots.slice(1, 5).map((item) => (
              <div key={item.id} className='md:p-2 p-1 w-1/4 '>
                <img
                  src={item.image}
                  className='w-full object-cover hover:scale-105 transition duration-300 bg-[#212124] w-220 h-304 object-center block rounded-md'
                  alt='alt'
                />
              </div>
            ))}
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
                      {stores.map((item) => item.name).join(', ')}
                    </span>
                  </h4>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
