import Image from 'next/image'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <section className='h-screen flex'>
      <div className='container mx-auto flex flex-col items-center py-8 px-5 md:flex-row'>
        <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-8'>
          <h1 className='title-font mb-4 font-medium dark:text-white lg:text-6xl'>
            GameBoost
          </h1>
          <p className='mb-8 leading-relaxed'>
            Accelerate your gaming experience fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className='flex w-full items-center'>
            <div className='relative mr-4 w-2/4 md:w-full lg:w-full xl:w-1/2'>
              {/* <input
                type='text'
                id='hero-field'
                name='hero-field'
                className='w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900'
              /> */}
              <Input />
            </div>
            <button className='group relative mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#980f90] to-[#f5d31a] p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white'>
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-grisTwo dark:bg-[#1c1917] '>
                Search
              </span>
            </button>
          </div>
          <p className='mt-2 mb-8 w-full text-sm text-gray-500'>
            Neutra shabby chic ramps, viral fixie.
          </p>
          <div className='flex text-gray-300 md:flex-col lg:flex-row'>
            <button className='inline-flex items-center rounded-lg bg-grisOne py-3 px-5 hover:bg-gray-700 hover:text-white focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-6 w-6'
                viewBox='0 0 512 512'>
                <path d='M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z' />
              </svg>
              <span className='ml-4 flex flex-col items-start leading-none'>
                <span className='mb-1 text-xs text-gray-400'>GET IT ON</span>
                <span className='title-font font-medium'>Google Play</span>
              </span>
            </button>
            <button className='ml-4 mt-0 inline-flex items-center rounded-lg bg-grisOne px-5 hover:bg-grisClaro hover:text-white focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-6 w-6'
                viewBox='0 0 305 305'>
                <path d='M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z' />
                <path d='M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z' />
              </svg>
              <span className='ml-4 flex flex-col items-start leading-none'>
                <span className='mb-1 text-xs text-gray-400'>
                  Download on the
                </span>
                <span className='title-font font-medium'>App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div className='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg'>
          <Image
            src='/remova.png'
            width={900}
            height={800}
            alt='gamerPad'
            priority
            className='rounded object-cover object-center'
          />
        </div>
      </div>
    </section>
  )
}

// <main className='max-w-full h-full flex relative'>
//   <div className='h-full w-full mx-2 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 '>
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//     <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-[#1c1917]' />
//   </div>
// </main>
