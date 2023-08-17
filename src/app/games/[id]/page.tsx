import { getGameById } from '@/app/components/gamesFetch/fetchGame'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function GetGameDetail({ params }: any) {
  const data = await getGameById(params.id)
  return (
    <section className='text-gray-400 container mt-1 items-center flex'>
      <div className=' mx-auto flex flex-wrap'>
        <div className='flex flex-wrap'>
          <div className='flex w-full py-44 px-10 my-4 relative rounded-lg'>
            <img
              src={data.background_image}
              className='object-center w-100 bg-[#212124] h-100 object-cover inset-0 w-full h-full block absolute rounded-lg'
              alt='asd'
            />

            {/* <img
              alt='gallery'
              class='w-full object-cover h-full object-center block opacity-25 absolute inset-0'
              src='https://dummyimage.com/820x340'
            /> */}
          </div>
          {/* <img
                alt='gallery'
                className='w-full object-cover h-full object-center block'
                src='https://dummyimage.com/502x302'
              /> */}

          <div className='flex flex-wrap w-2/3'>
            {data.short_screenshots.slice(1, 5).map((item) => (
              <div key={item.id} className='md:p-2 p-1 w-1/4 '>
                <img
                  src={item.image}
                  className='w-full object-cover hover:scale-105 transition duration-300 bg-[#212124] w-220 h-304 object-center block rounded-md'
                  alt='alt'
                />

                {/* <img
                alt='gallery'
                className='w-full object-cover h-full object-center block'
                src='https://dummyimage.com/502x302'
              />  */}
              </div>
            ))}
            <div className='flex flex-col'>
              <h4 className='py-2 text-2xl font-semibold'>About the game</h4>
              <p className='text-md py-2 text-gray-300'>{data.description}</p>
            </div>
          </div>

          <div className='flex flex-col items-center w-1/3 pl-6'>
            <Card>
              <CardHeader className='flex items-center'>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription className='text-lg'>
                  $ {data.price}
                </CardDescription>
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
                      {data.genres.map((item) => item.name).join(', ')}
                    </span>
                  </h4>
                  <h4 className=' text-[#22c55e]'>
                    Metacritic:{' '}
                    <span className='text-sm text-gray-200'>
                      {' '}
                      {data.metacritic}{' '}
                    </span>
                  </h4>
                  <h4 className='text-[#22c55e]'>
                    Rating:{' '}
                    <span className='text-sm text-gray-200'>
                      {data.rating}{' '}
                    </span>
                  </h4>
                  <h4 className='text-[#22c55e]'>
                    Released date:{' '}
                    <span className='text-sm text-gray-200'>
                      {data.released}{' '}
                    </span>
                  </h4>
                  <h4 className=' text-[#22c55e] '>
                    Platforms:{' '}
                    <span className='text-sm flex text-gray-200'>
                      {data.stores.map((item) => item.name).join(', ')}
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

// <article className='rounded-xl border border-grisTwo bg-[#1c1917] p-4 text-center'>
//   <div className='items-center gap-4 lg:mx-36 lg:block' />
//   <h2 className='text-2xl font-semibold '>{data.name}</h2>
//   <h3 className='text-md py-4 text-[#4b5563] dark:text-grisClaro'>
//     Price: <span className='text-lg '>${data.price}</span>
//   </h3>
//   <div className='flex flex-col gap-2'>
//     <button className='group relative mr-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#980f90] to-[#f5d31a] p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white'>
//       <span className='relative w-full rounded-md bg-[#1c1917] px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-grisTwo dark:bg-grisOne'>
//         Buy Now
//       </span>
//     </button>
//     <button className=' mt-0 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-grisOne px-5 py-2.5 shadow-md hover:bg-blackOne hover:text-white focus:outline-none'>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         className='icon icon-tabler icon-tabler-shopping-cart'
//         width={24}
//         height={24}
//         viewBox='0 0 24 24'
//         strokeWidth='1.5'
//         stroke='currentColor'
//         fill='none'
//         strokeLinecap='round'
//         strokeLinejoin='round'>
//         <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//         <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
//         <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
//         <path d='M17 17h-11v-14h-2' />
//         <path d='M6 5l14 1l-1 7h-13' />
//       </svg>

//       <span className='text-sm font-medium'>Add to Cart</span>
//     </button>
//   </div>

//   <div className='mt-4 space-y-2 text-left'>
//     <div className='flex h-full flex-col gap-1 rounded-lg border border-grisOne py-4 px-1'>
//       <h4 className=' text-white'>
//         Genres:{' '}
//         <span className='text-sm text-grisClaro'>
//           {data.genres.map((item) => item.name).join(', ')}
//         </span>
//       </h4>
//       <h4 className=' text-white'>
//         Metacritic:{' '}
//         <span className='text-sm text-grisClaro'>
//           {' '}
//           {data.metacritic}{' '}
//         </span>
//       </h4>
//       <h4 className='text-white'>
//         Rating:{' '}
//         <span className='text-sm text-grisClaro'>{data.rating} </span>
//       </h4>
//       <h4 className=' text-white'>
//         Released date:{' '}
//         <span className='text-sm text-grisClaro'>{data.released} </span>
//       </h4>
//       <h4 className=' text-white'>
//         Platforms:{' '}
//         <span className='text-sm flex flex-col justify-center'>
//           {data.stores.map((item, index) => (
//             <div key={index}>{item.name}</div>
//           ))}
//         </span>
//       </h4>
//     </div>
//   </div>
// </article>
