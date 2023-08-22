import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingGrid() {
  return (
    <div className='flex flex-wrap lg:mx-20'>
      {[...Array(12)].map((game, index) => (
        <div
          key={index}
          className='grid grid-cols-1 p-1 sm:w-1/2 md:w-1/2 lg:w-1/4'>
          <Skeleton className='h-60 w-100 justify-center items-center flex'>
            <div className='flex items-center justify-center rounded'>
              <svg
                className='w-100 h-20 text-gray-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'>
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
          </Skeleton>
        </div>
      ))}
    </div>
  )
}
