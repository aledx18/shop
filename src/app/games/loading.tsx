import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Skeleton } from '@/components/ui/skeleton'
const games = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

export default function Loading() {
  return (
    <div className='flex flex-wrap mx-auto'>
      {games.map((game, index) => (
        <div key={index} className='w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/4 flex'>
          <AspectRatio ratio={16 / 9}>
            <Skeleton className='h-full w-full' />
          </AspectRatio>
        </div>
      ))}
    </div>
  )
}
