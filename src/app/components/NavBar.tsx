'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const path = usePathname()

  const navItems = [
    {
      title: 'Home',
      href: '/',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-layout-grid'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
          <path d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
          <path d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
          <path d='M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
        </svg>
      )
    },
    {
      title: 'Game',
      href: '/games',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='icon icon-tabler icon-tabler-device-gamepad-2'
          viewBox='0 0 24 24'>
          <path stroke='none' d='M0 0h24v24H0z' />
          <path d='M12 5h3.5a5 5 0 010 10H10l-4.015 4.227a2.3 2.3 0 01-3.923-2.035l1.634-8.173A5 5 0 018.6 5H12z' />
          <path d='M14 15l4.07 4.284a2.3 2.3 0 003.925-2.023l-1.6-8.232M8 9v2M7 10h2M14 10h2' />
        </svg>
      )
    }
  ]

  return (
    <>
      <aside className='h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-[#1c1917] text-white'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={path === `${item.href}` ? 'text-[#22c55e]' : ''}>
            <li className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
              {item.svg}
            </li>
          </Link>
        ))}
      </aside>
    </>
  )
}
